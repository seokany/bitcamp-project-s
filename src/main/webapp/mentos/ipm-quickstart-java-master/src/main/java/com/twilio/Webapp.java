package com.twilio;

import static spark.Spark.get;
import static spark.Spark.staticFileLocation;

import java.util.HashMap;

import com.github.javafaker.Faker;
import com.google.gson.Gson;
import com.twilio.sdk.auth.AccessToken;
import com.twilio.sdk.auth.IpMessagingGrant;

public class Webapp {
  
  public static void main(String[] args) {
    // Serve static files from src/main/resources/public
    staticFileLocation("/public");
    
    // Create a Faker instance to generate a random username for the connecting user
    Faker faker = new Faker();
    
    // Create an access token using our Twilio credentials
    get("/token", "application/json", (request, response) -> {
      // Generate a random username for the connecting client
      String identity = faker.firstName() + faker.lastName() + faker.zipCode();
      
      // Create an endpoint ID which uniquely identifies the user on their current device
      String appName = "TwilioChatDemo";
      String endpointId = appName + ":" + identity + ":" + request.params("device");
      
      // Create IP messaging grant
      IpMessagingGrant grant = new IpMessagingGrant();
      grant.setEndpointId(endpointId);
      grant.setServiceSid(System.getenv("TWILIO_IPM_SERVICE_SID"));
      
      // Create access token
      AccessToken token = new AccessToken.Builder(
        System.getenv("TWILIO_ACCOUNT_SID"),
        System.getenv("TWILIO_API_KEY"),
        System.getenv("TWILIO_API_SECRET")
      ).identity(identity).grant(grant).build();
      
      // create JSON response payload 
      HashMap<String, String> json = new HashMap<String, String>();
      json.put("identity", identity);
      json.put("token", token.toJWT());

      // Render JSON response
      Gson gson = new Gson();
      return gson.toJson(json);
    });
  }
}
