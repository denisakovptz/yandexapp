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