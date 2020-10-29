from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np
import joblib

dataset = pd.read_csv('./train.csv')
dataset_test = pd.read_csv('./test.csv')

dataset.drop(columns='Id', inplace=True)

X = dataset.iloc[:, :-1]
Y = dataset.iloc[:, -1]
x_train, x_test, y_train, y_test = train_test_split(
    X, Y, test_size=0.50, random_state=2)

sc = StandardScaler()
X_train = sc.fit_transform(x_train)
X_test = sc.fit_transform(x_test)
joblib.dump(sc, "sc.bin", compress=True)

model = LinearRegression()
model.fit(X_train, y_train)
joblib.dump(model, "grad.joblib")
