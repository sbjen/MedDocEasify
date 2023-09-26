# hosted @ http://127.0.0.1:5000/


from tensorflow import keras
from flask import Flask
import api_helpers as hf
import tensorflow as tf

trained_model = keras.models.load_model("../saved-models/90_percent_model_2_lakh_para")
random_med_para = 'This RCT examined the efficacy of a manualized social intervention for children with HFASDs. Participants were randomly assigned to treatment or wait-list conditions. Treatment included instruction and therapeutic activities targeting social skills, face-emotion recognition, interest expansion, and interpretation of non-literal language. A response-cost program was applied to reduce problem behaviors and foster skills acquisition. Significant treatment effects were found for five of seven primary outcome measures (parent ratings and direct child measures). Secondary measures based on staff ratings (treatment group only) corroborated gains reported by parents. High levels of parent, child and staff satisfaction were reported, along with high levels of treatment fidelity. Standardized effect size estimates were primarily in the medium and large ranges and favored the treatment group.'


def split_sen_to_char(text):
    return " ".join(list(text))


app = Flask(__name__)


# by default get request
@app.route('/')
def home():
    return {
        "api_name": "medDocEasify ML Model Flask Api"
    }


@app.route('/predict', methods=['GET'])
def predict():
    sent_list = hf.para_to_formatted_inp(random_med_para)  # will return object dict of sentences
    line_number_list = [line["line_number"] for line in
                        sent_list]  # extract line number for each line  in para to make one hot to feed in model
    total_line_list = [line["total_lines"] for line in
                       sent_list]  # extract total_lines for each line  in para to make one hot to feed in model
    one_hot_line_number = tf.one_hot(line_number_list, depth=15)
    one_hot_total_lines = tf.one_hot(total_line_list, depth=20)

    # line list to feed in network
    line_list = [line["text"] for line in sent_list]
    splitted_lines_in_chars = [split_sen_to_char(line["text"]) for line in sent_list]
    predicted = trained_model.predict(x=(one_hot_line_number,
                                         one_hot_total_lines,
                                         tf.constant(line_list),
                                         tf.constant(splitted_lines_in_chars)))
    predicted = tf.argmax(predicted, axis=1)
    classes_ = ['BACKGROUND', 'CONCLUSIONS', 'METHODS', 'OBJECTIVE', 'RESULTS']
    test_abstract_pred_classes = [classes_[i] for i in predicted]

    prediction_json = hf.transform_para(predictions=test_abstract_pred_classes, lines_list=line_list)
    return {
        "data": prediction_json
    }

@app.route('/test', methods=['POST'])
def test():
    return {
        "status":200,
        "data": "post request done successfully"
     }




if __name__ == '__main__':
    app.run(debug=True)
