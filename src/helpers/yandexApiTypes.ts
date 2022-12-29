export interface ApiSetType {
   params: {
      SelectionCriteria: {
         DateFrom?: string,
         DateTo?: string,
         Filter: Filter[]
      },
      FieldNames: string[],
      Page?: Page,
      OrderBy?: OrderBy[],
      ReportName: string,
      ReportType: ReportType,
      DateRangeType: DateRangeType,
      Format: Format,
      IncludeVAT: Vat,
      IncludeDiscount?: Discount,
   }
}

export type Filter = {
   Field: string,
   Operator: Operator,
   Values: string[],
}

export enum Operator {
   EQUALS = "EQUALS",
   NOT_EQUALS = "NOT_EQUALS",
   IN = "IN",
   NOT_IN = "NOT_IN",
   LESS_THAN = "LESS_THAN",
   GREATER_THAN = "GREATER_THAN",
}

export type Page = {
   Limit: number,
}

export type OrderBy = {
   Field: string,
}

export enum ReportType {
   ACCOUNT_PERFORMANCE_REPORT = "ACCOUNT_PERFORMANCE_REPORT",
   CAMPAIGN_PERFORMANCE_REPORT = "CAMPAIGN_PERFORMANCE_REPORT",
   ADGROUP_PERFORMANCE_REPORT = "ADGROUP_PERFORMANCE_REPORT",
   AD_PERFORMANCE_REPORT = "AD_PERFORMANCE_REPORT",
   CRITERIA_PERFORMANCE_REPORT = "CRITERIA_PERFORMANCE_REPORT",
   CUSTOM_REPORT = "CUSTOM_REPORT",
   REACH_AND_FREQUENCY_PERFORMANCE_REPORT = "REACH_AND_FREQUENCY_PERFORMANCE_REPORT",
   SEARCH_QUERY_PERFORMANCE_REPORT = "SEARCH_QUERY_PERFORMANCE_REPORT",
}

export enum DateRangeType {
   TODAY = "TODAY",
   YESTERDAY = "YESTERDAY",
   LAST_7_DAYS = "LAST_7_DAYS",
   LAST_30_DAYS = "LAST_30_DAYS",
   LAST_90_DAYS = "LAST_90_DAYS",
   LAST_365_DAYS = "LAST_365_DAYS",
   THIS_WEEK_MON_TODAY = "THIS_WEEK_MON_TODAY",
   LAST_WEEK = "LAST_WEEK",
   THIS_MONTH = "THIS_MONTH",
   LAST_MONTH = "LAST_MONTH",
   ALL_TIME = "ALL_TIME",
   CUSTOM_DATE = "CUSTOM_DATE",
   AUTO = "AUTO",
}

export enum Vat {
   YES = "YES",
   NO = "NO",
}

export enum Format {
   TSV = "TSV",
}

export enum Discount {
   YES = "YES",
   NO = "NO",
}