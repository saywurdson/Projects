import sys

from termcolor import colored, cprint

fields = [[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "]]

def drawBoard(fields):
    for row in range(13):
        if row % 2 == 0:
            practicalRow = int(row/2)
            for column in range(13):
                if column % 2 == 0:
                    practicalColumn = int(column/2)
                    color = "white"
                    if fields[practicalColumn][practicalRow] == "X":
                        color = "red"
                    tile = colored(fields[practicalColumn][practicalRow], color, attrs=['bold'])
                    if column != 12:
                        print(tile, end="")
                    else:
                        print(tile)
                else:
                    print("|", end="")
        else:
            print("-------------")
    print("\n")

def updatedBoard(number, player):
    column = fields[number]
    index = ""
    reversedColumn = column[::-1]
    for row in reversedColumn:
        if row == " ":
            index = reversedColumn.index(row)
            reversedColumn[index] = "X" if player == 1 else "0"
            break
        if index == "":
            return False
        column = reversedColumn[::1]
        fields[number] = column
        drawBoard(fields)
        return True

def checkIfFourInARow():
    winner = False
    for column in fields:
        counter = 0
        length = len(column)
        for i in range(1, length):
            if column[i-1] != " " and column[i] != " " and column[i-1] == column[i]:
                counter += 1
            else:
                counter = 0
            if counter == 3:
                winner = column[i-1]
                return winner
        return winner

def checkIfFourInAColumn(columnMatrix):
    winner = False
    for column in columnMatrix:
        counter = 0
        length = len(column)
        for i in range(1, length):
            if column[i-1] != " " and column[i]  != " " and column[i-1] == column[i]:
                counter += 1
            else:
                counter = 0
            if counter == 3:
                winner = column[i-1]
                return winner
    return winner

def checkIfFourInForwardDiagonal(columnMatrix, player):
    for i in range(0, len(columnMatrix)):
        for j in range(0, len(columnMatrix[i])):
            try:
                if columnMatrix[i][j] == player and columnMatrix[i+1][j-1] == player and columnMatrix[i+2][j-2] == player and columnMatrix[i+3][j-3] == player:
                    return True
            except IndexError:
                next
    return False

def checkIfFourInBackwardDiagonal(columnMatrix, player):
    for i in range(0, len(columnMatrix)):
        for j in range(0, len(columnMatrix[i])):
            try:
                if columnMatrix[i][j] == player and columnMatrix[i+1][j+1] == player and columnMatrix[i+2][j+2] == player and columnMatrix[i+3][j+3] == player:
                    return True
            except IndexError:
                next
    return False 

def isValidMove(columnNumber):
    if columnNumber >=1 and columnNumber <=7:
        return True
    else:
        return False

def createColumnMatrix():
    columnMatrix = [[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "],[" "," ", " "," "," "," "," "]]   
    for i in range(7):
        for j in range(len(fields[i])):
            columnMatrix[j][i] = fields[i][j]
    return columnMatrix

def startConnect4():
    player = 1
    noWin = True
    winner = ""
    while(noWin):
        askColumn = colored('Player' + str(player) + ' turn, enter the column number:\n', "yellow",attrs=["bold"])
        columnNumber = input(askColumn)
        if columnNumber:
            columnNumber = int(columnNumber)
            if isValidMove(columnNumber) == False:
                cprint('This move is against the rules. Please try again.\n', "red", attrs=["bold"])
            else:
                updatedFlag = updatedBoard(columnNumber - 1, player)
                if updatedFlag:
                    print("")
                    currentPlayer = player
                    tile = "X" if player == 1 else "0"
                    player = 2 if player == 1 else 1
                    winner = checkIfFourInARow()
                    if winner:
                        noWin = False
                    else:
                        columnMatrix = createColumnMatrix()
                        winner = checkIfFourInAColumn(columnMatrix)
                        if winner:
                            noWin = False
                        elif checkIfFourInBackwardDiagonal(columnMatrix, tile):
                            winner = currentPlayer
                            noWin = False
                        elif checkIfFourInForwardDiagonal(columnMatrix, tile):
                            winner = currentPlayer
                            noWin = False
                else:
                    cprint('This move is against the rules. Please try again.\n', "red", attrs=["bold"])
        else:
            cprint('This move is against the rules. Please try again.\n', "red", attrs=["bold"])

    if winner == "X":
        winner = "1"
    else:
        winner = "2"
    cprint('The Winner is Player '+ str(winner), 'blue', attrs=["bold"])

print('Starting Connect 4....\n')

drawBoard(fields)
startConnect4()