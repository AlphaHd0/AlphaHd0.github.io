import webbrowser
from  tkinter import *

root = Tk()
root.title("Nooble Chromeble")
root.geometry("500x300")

aramaLabel = Label(root, text="Aramak iştediğiniz şeyi yazınız", font=("New Times Roman", 10)).place(x=160, y=88)
arama = StringVar()
aramaEntry = Entry(root, width=50, textvariable=arama).place(x=100, y=110)

def ara():
    url = "https://www.google.com/search?q=" + arama.get()
    webbrowser.get().open(url)
Button(root, text="Arama yap", font=("Comic Sans MS", 10), bg="lime", command=ara).place(x=215, y=180)

root.mainloop()