const API_URL_CLIENTS = "https://api-sandbox.direct.yandex.com/json/v5/clients";
const API_URL_CAMPAIGNS = "https://api-sandbox.direct.yandex.com/json/v5/campaigns";
const API_URL_GROUPS = "https://api-sandbox.direct.yandex.com/json/v5/adgroups";
const API_URL_STATS = "https://api-sandbox.direct.yandex.com/json/v5/reports";

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

const get_group_stats = {
   "apiUrl": API_URL_STATS,
   "apiAuth": API_AUTH,
   "apiSet": {
      "params": {
         "SelectionCriteria": {
            "DateFrom": "2022-01-01",
            "DateTo": "2022-12-01",
            "Filter": [{
               "Field": "AdGroupId",
               "Operator": "IN",
               "Values": ["4257314"]

            }]
         },
         "FieldNames": ["Date", "AdGroupId", "Clicks", "Cost"],
         "OrderBy": [{
            "Field": "Date"
         }],
         "ReportName": "Actual Data",
         "ReportType": "ADGROUP_PERFORMANCE_REPORT",
         "DateRangeType": "CUSTOM_DATE",
         "Format": "TSV",
         "IncludeVAT": "YES",
         "IncludeDiscount": "YES"
      }
   }
}

export {
   api_url,
   get_campaigns,
   get_groups,
   get_client,
   get_group_stats
}
