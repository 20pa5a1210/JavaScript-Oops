def con(num):
    if (num>10):
        return (num-1)
    return con(con(num+5))

print(con(2))