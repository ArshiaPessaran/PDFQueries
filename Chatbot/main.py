import langchainhelper as lch
import streamlit as st

st.title("Travel Buddy")

submitted_location = st.sidebar.selectbox("Submit your location.", ("Orlando","New York","Houston"))

if submitted_location:
    response = lch.generate_gas_prices(submitted_location)
    st.text(response["GasPrices"])