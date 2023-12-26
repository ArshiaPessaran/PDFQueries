import llmChainResponse as lch
import streamlit as st

st.title("Travel Buddy")

submitted_location = st.sidebar.text_input("Submit your location.")

if submitted_location:
    response = lch.generate_gas_prices(submitted_location)
    st.markdown(response["GasPrices"])