def friend(names):
    friends = [name for name in names if len(name) == 4]
    return friends

# Example usage:
input_names = input('Enter 5 different first names ')
output_names = friend(input_names)
print(output_names)