# My OpenAI Lambda Function

This AWS Lambda function uses the OpenAI GPT-3.5 API to generate responses based on input events.

## Configuration

### Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API Key. This is required to make requests to the GPT-3.5 API.

### Rate Limits

This service has the following rate limits during alpha testing:

- Rate Limit: 10 requests per second (RPS)
- Burst Limit: 20



## Usage

To use this Lambda function, you need to provide an event body with the necessary input for the GPT-3.5 API.

For example:

```json
{
  "prompt": "Translate the following English text to French: '{}'",
  "max_tokens": 60
}
