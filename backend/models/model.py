from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import pandas as pd
import joblib

dataset = pd.read_csv('./train.csv')
dataset_test = pd.read_csv('./test.csv')

dataset.drop(columns='Id', inplace=True)

# regression

# model selection

# preprocessing

# evaluation metrics

X = dataset.iloc[:, :-1]
Y = dataset.iloc[:, -1]
x_train, x_test, y_train, y_test = train_test_split(
    X, Y, test_size=0.50, random_state=2)

sc = StandardScaler()
X_train = sc.fit_transform(x_train)
X_test = sc.fit_transform(x_test)

# We'll be going with Linear Regression as it best fits our criteria from plot as well as score
model = LinearRegression()
model.fit(X_train, y_train)
pred = model.predict(X_test)
joblib.dump(model, "grad.joblib")
