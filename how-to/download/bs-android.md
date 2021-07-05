# How To Download Bird Script For Android Version 7+

### Download Pydroid 3 IDE For Python    https://play.google.com/store/apps/details?id=ru.iiec.pydroid3&hl=en_IN&gl=US

## 1. Open Pydroid 3 Python3  IDE

## 2. Click On The Menu Option

## 3. Choose Terminal

## 4. Paste This Code In Terminal and hit Enter   
``` 
pip install foolscript==1.0.0
```

###### 5. Wait to Finish Install The Package

## 6. Go Back To The Editor

```
import foolscript as run
while True:
    text = input('>>> ')
    if text.strip() == "": continue
    result, error = run.run('<stdin>', text)

    if error:
        print(error.as_string())
    elif result:
        if len(result.elements) == 1:
            print(repr(result.elements[0]))
        else:
            print(repr(result))
 ```
## 7. Paste this code in the editor and save the file as 
```
birdscript_shell.py
```
## 8. Click on the run Button at the bottom right corner of the editor, then your are set to go🥳🥳

### Screenshot
[sc1](assets/img/b1.jpg)
[sc2](assets/img/b3.jpg)
[sc3](assets/img/b4.jpg)
