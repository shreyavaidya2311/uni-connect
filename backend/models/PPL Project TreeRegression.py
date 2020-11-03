#!/usr/bin/env python
# coding: utf-8

# In[4]:


import pandas as pd
import numpy as np
from sklearn.ensemble import ExtraTreesRegressor

etr = ExtraTreesRegressor()


# In[2]:


df = pd.read_csv("Admission_Predict_Ver1.1.csv")


# In[3]:


df


# In[5]:


x = df[['GRE Score', 'TOEFL Score', 'University Rating',
        'SOP', 'LOR ', 'CGPA', 'Research']]
y = df["Chance of Admit "]


# In[6]:


etr.fit(x,y)


# In[ ]:




