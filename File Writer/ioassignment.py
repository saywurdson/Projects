import os

# Prompt for a filename
filename = input("Please enter the filename: ")

# Check if the file exists
if os.path.isfile("./" + filename):
    print("Looking for the file, {}...".format(filename))
    print("File found.")
    action = input(
        "What would you like to do with this file?\nPossible actions are: read, delete, append, or replace\n"
    )
    if action == "read": # read the file and show the contents on the screen
        print("The content of the file:")
        with open(filename, "r") as readFile:
            print(readFile.read())
    elif action == "append": # add new text to the existing file
        text = input("Please add your text: ")
        with open(filename, "a") as appendFile:
            appendFile.write(text + "\n")
    elif action == "delete": # delete the file and add an empty one in its place
        os.remove("./" + filename)
        print("{} has been deleted".format(filename))
        with open(filename, "w") as writeFile:
            writeFile.write("")
    elif action == "replace": # replace file with a new file
        lineNumber = int(
            input("Please enter the line number you want to replace: ") # line number prompt
        )
        text = input("Please enter your text: ") # text prompt
        with open(filename, "r") as readFile:
            lines = readFile.readlines()
        with open(filename, "w") as writeFile:
            for idx, line in enumerate(lines):
                if idx == lineNumber - 1:
                    print("Line number {} needs to be replaced.".format(lineNumber))
                    writeFile.write(text + "\n")
                else:
                    print("Writing \"{}\"".format(line))
                    writeFile.write(line)
    else:
        print("Unrecognized action.")
else:
    print("File does not exist! Let's create a new file for you.")
    text = input("Please enter your text: ")
    with open(filename, "w") as writeFile:
        writeFile.write(text + "\n")
