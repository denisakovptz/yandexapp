const API_URL_CLIENTS = "https://api-sandbox.direct.yandex.com/json/v5/clients";
const API_URL_CAMPAIGNS = "https://api-sandbox.direct.yandex.com/json/v5/campaigns";
const API_URL_GROUPS = "https://api-sandbox.direct.yandex.com/json/v5/adgroups";

const API_AUTH = "Bearer AQAAAAAUF2KZAAfpQCuJgxls6ElMg4VzLlykD6o";

const api_url = `http://localhost:8000`;

const get_client = {
   "apiUrl": API_URL_CLIENTS,
   "apiAuth": API_AUTH,
   "apiSet": {
      "method": "get",
      "params": {
         "FieldNames": ["Login", "ClientId"],
      }
   }
};

const get_campaigns = {
   "apiUrl": API_URL_CAMPAIGNS,
   "apiAuth": API_AUTH,
   "apiSet": {
      "method": "get",
      "params": {
         "SelectionCriteria": {},
         "FieldNames": ["Id", "Name"]
      }
   }
};


const get_groups = {
   "apiUrl": API_URL_GROUPS,
   "apiAuth": API_AUTH,
   "apiSet": {
      "method": "get",
      "params": {
         "SelectionCriteria": {
            "CampaignIds": [436184, 436186]
         },
         "FieldNames": ["Id", "Name"]
      }
   }
}

export {
   api_url,
   get_campaigns,
   get_groups,
   get_client
}
