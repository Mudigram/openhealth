export type FacilityService = {
  services: {
    name: string;
  };
};

export type FacilityRow = {
  id: string;
  name: string;
  facility_type: string;
  ownership: string;
  state: string;
  lga: string;
  address: string;
  facility_services: FacilityService[];
};
