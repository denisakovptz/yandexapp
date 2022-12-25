export interface CampaignsState {
   data: CampData[],
   campIdList: number[],
   status: null | string,
   error: any,
};

export type CampData = {
   Id: number,
   Status: string,
   Name: string
}

export interface GroupsState {
   data: GroupsData[],
   showData: GroupsData[],
   status: null | string,
   error: any,
};

export type GroupsData = {
   Id: number,
   Name: string,
   CampaignId: number,
   Status: string
}
export interface CampaignsStatsState {
   data: CampStats[],
   status: null | string,
   error: any,
};

export type CampStats = string[];
// export type CampStats = {
//    CampaignId: number,
//    CampaignName: string,
//    Impressions: number,
//    Clicks: number,
//    Cost: number,
//    Ctr: number,
//    BounceRate: number,
// }