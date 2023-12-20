#import streamlit as st
#st.title("Travel Buddy")

from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain


from APIKey import OPENAI_API_KEY

if OPENAI_API_KEY is None:
    raise ValueError("OPEN_API_KEY is not set in the .env file")

def generate_gas_prices(location):
    llm = OpenAI(temperature=0.7, openai_api_key=OPENAI_API_KEY)
    prompt_template_name = PromptTemplate(
        input_variables = ['location'],
        template = "I am in {location}, find me gas station prices."
    )

    prices_chain = LLMChain(llm=llm, prompt=prompt_template_name)
    response = prices_chain({'location': location})
    return response


if __name__ == "__main__":
    print(generate_gas_prices("orlando"))