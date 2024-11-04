import type {
  TourAgencyCreate,
  TourAgency as _TourAgency,
  TourAgentCreate,
  TourAgent as _TourAgent,
} from '../../models';
import { TourAgency, TourAgent } from '.';
import {
  createAgencyApiV1TourAgentsTourAgenciesPost,
  createAgentApiV1TourAgentsPost,
  deleteAgentApiV1TourAgentsAgentUidDelete,
  getAgentApiV1TourAgentsAgentUidGet,
  listAgentsApiV1TourAgentsGet,
  listTourAgenciesApiV1TourAgentsTourAgenciesGet,
  queryAgentsApiV1TourAgentsSearchPost,
  updateAgentApiV1TourAgentsAgentUidPatch,
  getByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGet,
  queryTourAgenciesApiV1TourAgentsTourAgenciesSearchPost,
} from '../../models';
import { api } from '../../composables/useApi';

export const useTourAgenciesStore = defineStore('tour-agencies', {
  state: () => {
    return {
      tourAgencies: [] as TourAgency[],
      newTourAgency: {} as _TourAgency,
      showNewTourAgency: false,
    };
  },
  actions: {
    getIndex(tour_agency_id: number) {
      const index = this.tourAgencies.findIndex(
        (tourAgency) => tourAgency.id == tour_agency_id
      );
      return index;
    },
    retrieve(tour_agency_id: number) {
      const index = this.getIndex(tour_agency_id);
      return this.tourAgencies[index];
    },
    setTourAgencies(tourAgencies: _TourAgency[]) {
      this.tourAgencies = tourAgencies.map(
        (tourAgency) => new TourAgency(tourAgency)
      );
    },
    async create() {
      const body: TourAgencyCreate = { ...this.newTourAgency };
      await this.$call(
        createAgencyApiV1TourAgentsTourAgenciesPost({ client: api, body })
      );
    },
    async list() {
      const data = await this.$call(
        listTourAgenciesApiV1TourAgentsTourAgenciesGet({ client: api })
      );
      this.setTourAgencies(data.tour_agencies);
    },
    async query(body: string) {
      const data = await this.$call(
        queryTourAgenciesApiV1TourAgentsTourAgenciesSearchPost({
          client: api,
          body,
        })
      );
      this.setTourAgencies(data.tour_agencies);
    },
    async get(tour_agency_id: number) {
      const index = await this.refresh(tour_agency_id);

      return this.tourAgencies[index];
    },
    async refresh(tour_agency_id: number) {
      const data = await this.$call(
        getByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGet({
          client: api,
          path: { tour_agency_id },
        })
      );
      const index = this.getIndex(tour_agency_id);
      this.tourAgencies[index] = data;
      return index;
    },
  },
});

export const useTourAgentsStore = defineStore('tour-agents', {
  state: () => {
    return {
      tourAgents: [] as TourAgent[],
      createAgent: false,
    };
  },
  actions: {
    setCreateAgent(value: boolean) {
      this.createAgent = value;
    },
    setTourAgents(tourAgents: _TourAgent[]) {
      this.tourAgents = tourAgents.map(
        (tourAgent) => new TourAgent(tourAgent)
      );
    },
    async create(tourAgent: TourAgent) {
      const body: TourAgentCreate = {
        ...tourAgent,
        websites: tourAgent.websites.filter((website) => website.value),
        emails: tourAgent.emails.filter((email) => email.value),
        phone_numbers: tourAgent.phone_numbers.filter(
          (phone_number) => phone_number.value
        ),
        tour_agency_id: tourAgent.tour_agency.id,
      };
      const data = await this.$call(
        createAgentApiV1TourAgentsPost({ client: api, body })
      );
      return data;
    },
    async list() {
      const data = await this.$call(
        listAgentsApiV1TourAgentsGet({ client: api })
      );
      this.setTourAgents(data.tour_agents);
    },
    async get(tourAgentUid: string) {
      const tourAgentIndex = await this.refresh(tourAgentUid);
      return this.tourAgents[tourAgentIndex];
    },
    async query(body: string) {
      const data = await this.$call(
        queryAgentsApiV1TourAgentsSearchPost({ client: api, body })
      );
      this.setTourAgents(data.tour_agents);
    },
    async patch(tourAgent: _TourAgent) {
      await this.$call(
        updateAgentApiV1TourAgentsAgentUidPatch({
          client: api,
          path: { agent_uid: tourAgent.uid },
          body: tourAgent,
        })
      );
    },
    async delete(agentUid: string) {
      await this.$call(
        deleteAgentApiV1TourAgentsAgentUidDelete({
          client: api,
          path: { agent_uid: agentUid },
        })
      );
    },
    async refresh(tourAgentUid: string) {
      const data = await this.$call(
        getAgentApiV1TourAgentsAgentUidGet({
          client: api,
          path: { agent_uid: tourAgentUid },
        })
      );
      const tourAgentIndex = this.tourAgents.findIndex(
        (tourAgent) => tourAgent.uid == tourAgentUid
      );
      this.tourAgents[tourAgentIndex] = new TourAgent(data);
      return tourAgentIndex;
    },
  },
});
