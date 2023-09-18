def read_lines_from_txt(filename):
    """
    Reads a file named filename and returns lines of text as list
    Args:
      filename: string of target filepath
    Returns: list of string, one string per line as a list item
    """
    with open(filename, 'r') as f:
        return f.readlines()


def seprate_label_from_sentence(line,line_number):
    """
    seprate line with delimeter "\t


    """
    if (line[:3] != "###") and (line[:2] != "\n"):

        lst = line.split("\t")
        lst[1] = lst[1].replace("\n","")
        return {"target": lst[0],
                "text": lst[1].lower(),
                "line_number":line_number
                }

    else:
        pass


def extract_para(file_line_list):



    """
    will create dictionary object which contains all paragraph as indexed object
    eg. extract_para(train_txt_lines)[0] is a paragraph dict object extracted from txt file
    eg. extract_para(train_txt_lines)[0]["entire_para"][0] is a paragraph's {text,target} object

    return dict:
    {
    total_para:
    0:
    1:
    .
    .
    total_para
    }
    ----------
    index
    {
    entire_para: list of dic object containing target, text
    total_lines:total lines in para

    }


    :param file_line_list: txt file path
    :Note para is seprated by ###
    :return: dictionary conataining total_para, indexed para dic object
    """
    all_para = {"total_para": 0}
    i = 0
    line_number = 0
    para = {"entire_para": [],
            "total_lines": 0}

    for line in file_line_list:
        if line[:3] == '###':
            line_number = 0 # reset line number for new para
            all_para[i] = para
            all_para["total_para"] += 1
            para["total_lines"] = len(para["entire_para"]) - 1 # None line is present in list at the end
            para = {"entire_para": [],
                    "total_lines": 0}
            i += 1
            # print("para: \n")
            # print(para)
            # print(" all para: \n")
            # print(all_para)


        else:
            if line != None :

                txt_n_labels = seprate_label_from_sentence(line,line_number)
                # print(txt_n_labels) # will return label and text dict for line

                line_number += 1
                para["entire_para"].append(txt_n_labels)


    return all_para

# def extract_para(file_line_list):
#   all_para =  {}
#   i = 0
#   total = 0
#   para = {}

#   for line in file_line_list:
#     if line == r'###\d+\n':
#       all_para[i] = para
#       para = {}
#       i++
#     else:
#       tex_n_label = seprate_label_from_sentence(line = line,total_line = j)

#       para["target"]

def make_list_of_all_labeled_sentences(data_dic):

    """
    :param data_dic: data dictionary
    :return: list of all data which contains object
    """
    dev_deta_lines = []
    for index in range(len(data_dic) - 1):

        for line in range(data_dic[index]["total_lines"]):
            dev_deta_lines.append(data_dic[index]["entire_para"][line])

    return dev_deta_lines

from sklearn.metrics import accuracy_score, precision_recall_fscore_support


  # Calculate model accuracy

def accuracy_of_model(y_true,y_pred):
  """


  Args:
      y_true: true labels in the form of a 1D array
      y_pred: predicted labels in the form of a 1D array
  """
  model_accuracy = accuracy_score(y_true, y_pred) * 100
  # Calculate model precision, recall and f1 score using "weighted average
  model_precision, model_recall, model_f1, _ = precision_recall_fscore_support(y_true, y_pred, average="weighted")
  model_results = {"accuracy": model_accuracy,
                  "precision": model_precision,
                  "recall": model_recall,
                  "f1": model_f1}
  return model_results

