export type AmplifyDependentResourcesAttributes = {
  "api": {
    "NceConversationContextManagementService": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "NceGptInterfaceService": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "northcountryengineer": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "northcountryengineerb272f13e": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "NceConversationContextManagementService": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "NceGptInterfaceFunction": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "NceConversationContextDb": {
      "Arn": "string",
      "Name": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string",
      "StreamArn": "string"
    },
    "nceBlogFiles": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}