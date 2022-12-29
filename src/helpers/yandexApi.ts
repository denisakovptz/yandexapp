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
         "FieldNames": ["Id", "Name", "Status"]
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
            "CampaignIds": []
         },
         "FieldNames": ["CampaignId", "Id", "Name", "Status"]
      }
   }
}

const get_camp_stats = {
   "apiUrl": API_URL_STATS,
   "apiAuth": API_AUTH,
   "apiSet": {
      "params": {
         "SelectionCriteria": {
            "Filter": [{
               "Field": "CampaignId",
               "Operator": "IN",
               "Values": ["444758"]
            }]
         },
         "FieldNames": ["CampaignId", "CampaignName", "Impressions", "Clicks", "Cost", "Ctr", "BounceRate"],
         "OrderBy": [{
            "Field": "CampaignId"
         }],
         "ReportName": "Actual Data",
         "ReportType": "CAMPAIGN_PERFORMANCE_REPORT",
         "DateRangeType": "ALL_TIME",
         "Format": "TSV",
         "IncludeVAT": "YES",
         "IncludeDiscount": "YES"
      }
   }
}

const get_group_stats = {
   "apiUrl": API_URL_STATS,
   "apiAuth": API_AUTH,
   "apiSet": {
      "params": {
         "SelectionCriteria": {
            // "DateFrom": '2022-12-19',
            // "DateTo": '2022-12-24',
            "Filter": [{
               "Field": "AdGroupId",
               "Operator": "IN",
               "Values": ["4437753"]
            }]
         },
         "FieldNames": ["AdGroupId", "AdGroupName", "Impressions", "Clicks", "Cost", "Ctr", "BounceRate", "AvgClickPosition", "AvgPageviews"],
         "OrderBy": [{
            "Field": "AdGroupId"
         }],
         "ReportName": "Actual Groups Data",
         "ReportType": "ADGROUP_PERFORMANCE_REPORT",
         "DateRangeType": "LAST_3_DAYS",
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
   get_group_stats,
   get_camp_stats
}
