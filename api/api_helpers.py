def para_to_formatted_inp(para):

    """
    tranform paragraph to list of sentence using spacy pipeline trained on english language
    :param para: (string) paragraph
    :return: list of strings
    """
    from spacy.lang.en import English

    nlp = English()
    sentencizer = nlp.add_pipe("sentencizer")
    doc = nlp(para)
    abstract_lines = [str(sent) for sent in
                      list(doc.sents)]  # return detected sentences from doc in string type (not spaCy token type)
    total_lines = len(abstract_lines)
    temp_list = []

    i = 0
    for line in abstract_lines:
        temp_dict = {}
        temp_dict["text"] = line
        temp_dict["line_number"] = i
        temp_dict["total_lines"] = total_lines
        i = i + 1
        temp_list.append(temp_dict)

    return temp_list


def transform_para(predictions,lines_list ):

    """

    transform prediction data to json object containg all classes as key and whose value to be list constaing all predicted sentence corresponding to class
    :param predictions: prediction list
    :param lines_list: sentence list
    :return:  python dict object
    """


    temp_dic = {
      "BACKGROUND":[],
      "OBJECTIVE":[],
      "METHODS":[],
      "RESULTS":[],
      "CONCLUSIONS":[],
    }
    i = 0
    for i in range(len(lines_list )- 1):
        pred_class = predictions[i]
        # print(pred_class)
        temp_dic[pred_class].append(lines_list[i])
    return temp_dic