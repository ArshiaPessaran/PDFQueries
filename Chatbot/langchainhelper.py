from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

from APIKey import OpenAIKey
if OpenAIKey is None:
    raise ValueError("OPEN_API_KEY is not set. Create APIKey.py file that defines variable OpenAIKey")

def generate_gas_prices(location):
    llm = OpenAI(temperature=0.7, openai_api_key=OpenAIKey)
    prompt_template_name = PromptTemplate(
        input_variables = ['location'],
        template = "I am in {location}, find me gas station prices."
    )

    prices_chain = LLMChain(
        llm = llm,
        prompt = prompt_template_nam,
        output_key = "GasPrices"
        )
    
    response = prices_chain({'location': location})
    return response

if __name__ == "__main__":
    print(generate_gas_prices("orlando"))