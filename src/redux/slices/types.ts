export interface CampaignsState {
   data: CampData[],
   campIdList: number[],
   status: null | string,
   error: null | CampError,
};

export type CampData = {
   Id: number,
   Status: string,
   Name: string,
}

export type CampError = {
   error_code: number,
   error_string: string,
   error_detail: string,
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
   Status: string,
}
export interface StatsState {
   data: Stats[],
   status: null | string,
   error: any,
};

export type Stats = string[];

export interface UnitsState {
   balance: number,
   startBalance: number,
};
