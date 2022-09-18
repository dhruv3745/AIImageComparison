from tkinter import Variable
from flask import Flask
import numpy
import time
import threading 
from flask import Flask, render_template, url_for, flash, redirect
from flask_wtf import FlaskForm
from wtforms import SelectMultipleField, SubmitField, SelectField
from eye_tracker import track_eye
import asyncio

app = Flask(__name__)




@app.route("/members")
def members():
    return{"members":["member1", "member2", "member3"]}

@app.route("/googleImage")
def googleImage():
    images=[]
    return images

@app.route("/eyeTracker")
def eyeTrack():
    results = []
    direction=False
    track_eye(direction, results)
    right = 0
    left = 0
    for dir in results:
        if dir:
            right += 1
        else:
            left += 1
    left_right = [left,right]
    print("return#1")
    return left_right


if __name__ == "__main__":
    app.run(debug=True, host='localhost', port=8000)
