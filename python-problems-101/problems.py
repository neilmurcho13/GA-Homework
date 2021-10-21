# to pass the test function, please return a string of 'string' from then function
# eg: test() => 'string'
def test():
    return 'string'

# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"

def hello(string= "World"):
    return f"Hello {string}!"

print(hello("Neil"))
print(hello())

# write a function that will calculate the area of a circle, given the radius
import math
def area_of_circle(radius):
    return (math.pi * (radius**2))
print (area_of_circle(2))


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return ((celcius * (9/5)) + (32)) 
print (celcius_to_farenheit(0))


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    number = str(number)
    reverse = str(number)[::-1] # how this works - this notation means 'Start: stop: step' and if there are no values, 0 is the default. So it moves the object at index '0' to -1, then repeats it 

    return float(reverse)
print (number_reverse(456733))

# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False

def palindrome_check(string):
    string = string.replace(' ', '')
    rev_string = (string)[::-1]
    if string == rev_string:
        #print("string", string, "reverse string", rev_string)
        return True
    else:
        return False


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    string = string.lower()
    string_no_spaces = string.replace(' ', '')
    in_order = sorted(string_no_spaces) #sorted returns a list 
    print("test", in_order)
    in_order_together = "".join(in_order)
    return in_order_together

    
# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'


def title_case(string):
    return string.title()


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6


def isVowel(character): #vowel test 
    vowels = "aeiou"

    if character in vowels: 
        return 1
    else: 
        return 0 

def num_of_vowels(string):
    string = string.lower() # converts to lowercase 
    count = 0
    for i in range(len(string)):
        if isVowel(string[i]): 
            count += 1
    return count


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************


def frame(string):
    # string = "* " + string + " *" 
    asterisks_1 = '***************\n* '
    asterisks_2 = ' *\n***************'
    output = asterisks_1 + string + asterisks_2
    print("TEST", output)
    return output 

