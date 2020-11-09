import pandas as pd
import numpy as np
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib

df = pd.read_csv("admpr1.csv")
df2 = pd.read_csv("admpr.csv")

data = pd.concat([df, df2])
data.drop(columns='Serial No.', inplace=True)


x = data.iloc[:, : -1]
y = data.iloc[:, -1]

sc = StandardScaler()
x = sc.fit_transform(x)
joblib.dump(sc, "sc.bin", compress=True)

etr = ExtraTreesRegressor()

model = etr.fit(x, y)
joblib.dump(model, "grad.joblib")
