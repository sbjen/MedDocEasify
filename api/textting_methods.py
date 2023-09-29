classes_ = ['BACKGROUND', 'CONCLUSIONS', 'METHODS', 'OBJECTIVE', 'RESULTS']


def final_printable_text_in_appropriate_format(prediction,  classes = classes_):
    """

    :param classes: contains name of classes
    :param prediction: (JSON) object to be formatted
    :return: string containing final output well formatted
    """

    # prediction[classes[classname_no]] = list
    final_output = ""
    for classname_no in range(len(classes)) :
        if len(prediction[classes[classname_no]]) > 0:
            final_output = final_output +"\n" + classes[classname_no] + ": \n"
            for line_no in range(len(prediction[classes[classname_no]])):
                final_output  = final_output + prediction[classes[classname_no]][line_no] + " \n"



    return final_output


obj = {
    "BACKGROUND": ["ok0" ,"list0" ],
    "CONCLUSIONS": [],
    "METHODS": ["ok2", "list2"],
    "OBJECTIVE": ["ok3", "list3"],
    "RESULTS": ["ok4", "list4"]

}

testt = final_printable_text_in_appropriate_format(obj)

print(testt)