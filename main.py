import os

def start_menu():
    print('''
   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒        
   ▒▀▀█▀▀▒█▀▀█▒█▒▒▒█▒█▀▀▒█▀▀█▒▒▒▒█▀▀█▒█▀▀▒▒▒▒▒█▀▀█▒█▒▒█▒█▀▀█▒█▒▒▒█▒▒▒█▀▀▒█▀▀▄▒█▀▀▀▒█▀▀▒█▀▀▒▒ 
   ▒▒▒█▒▒▒█▒▒█▒█▄█▄█▒█▀▀▒█▄▄▀▒▒▒▒█▒▒█▒█▀▀▒▒▒▒▒█▒▒▒▒█▀▀█▒█▄▄█▒█▒▒▒█▒▒▒█▀▀▒█▒▒█▒█░▀█▒█▀▀▒▀▀█▒▒ 
   ▒▒▒█▒▒▒▀▀▀▀▒▒▀▒▀▒▒▀▀▀▒▀▒▀▀▒▒▒▒▀▀▀▀▒▀▒▒▒▒▒▒▒█▄▄█▒▀▒▒▀▒▀▒▒▀▒▀▀▀▒▀▀▀▒▀▀▀▒▀▒▒▀▒▀▀▀▀▒▀▀▀▒▀▀▀▒▒
   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
    ''')























def main():
    ''' 
        This function is responsable by start the program.

        Variables:
        - None

        Input:
        - None

        Outputs:
        - Use the import "os" and by the method "system" cleans the screen with a "str" ("cls")
        - Calls the function 'start_menu()'

    '''

    os.system('cls')
    start_menu()

if __name__ == '__main__':
    main()