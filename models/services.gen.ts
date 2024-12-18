// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type { ListTourAgenciesApiV1TourAgentsTourAgenciesGetError, ListTourAgenciesApiV1TourAgentsTourAgenciesGetResponse, CreateAgencyApiV1TourAgentsTourAgenciesPostData, CreateAgencyApiV1TourAgentsTourAgenciesPostError, CreateAgencyApiV1TourAgentsTourAgenciesPostResponse, GetByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGetData, GetByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGetError, GetByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGetResponse, QueryTourAgenciesApiV1TourAgentsTourAgenciesSearchPostData, QueryTourAgenciesApiV1TourAgentsTourAgenciesSearchPostError, QueryTourAgenciesApiV1TourAgentsTourAgenciesSearchPostResponse, ListAgentsApiV1TourAgentsGetError, ListAgentsApiV1TourAgentsGetResponse, CreateAgentApiV1TourAgentsPostData, CreateAgentApiV1TourAgentsPostError, CreateAgentApiV1TourAgentsPostResponse, QueryAgentsApiV1TourAgentsSearchPostData, QueryAgentsApiV1TourAgentsSearchPostError, QueryAgentsApiV1TourAgentsSearchPostResponse, GetAgentApiV1TourAgentsAgentUidGetData, GetAgentApiV1TourAgentsAgentUidGetError, GetAgentApiV1TourAgentsAgentUidGetResponse, UpdateAgentApiV1TourAgentsAgentUidPatchData, UpdateAgentApiV1TourAgentsAgentUidPatchError, UpdateAgentApiV1TourAgentsAgentUidPatchResponse, DeleteAgentApiV1TourAgentsAgentUidDeleteData, DeleteAgentApiV1TourAgentsAgentUidDeleteError, DeleteAgentApiV1TourAgentsAgentUidDeleteResponse, ListStopsApiV1VehiclesStopsByPlatePlateGetData, ListStopsApiV1VehiclesStopsByPlatePlateGetError, ListStopsApiV1VehiclesStopsByPlatePlateGetResponse, GetStopApiV1VehiclesStopsStopIdGetData, GetStopApiV1VehiclesStopsStopIdGetError, GetStopApiV1VehiclesStopsStopIdGetResponse, UpdateDriverStopApiV1VehiclesStopsStopIdPatchData, UpdateDriverStopApiV1VehiclesStopsStopIdPatchError, UpdateDriverStopApiV1VehiclesStopsStopIdPatchResponse, DeleteDriverStopApiV1VehiclesStopsStopIdDeleteData, DeleteDriverStopApiV1VehiclesStopsStopIdDeleteError, DeleteDriverStopApiV1VehiclesStopsStopIdDeleteResponse, CreateDriverStopApiV1VehiclesStopsPostData, CreateDriverStopApiV1VehiclesStopsPostError, CreateDriverStopApiV1VehiclesStopsPostResponse, ListVehiclesApiV1VehiclesGetError, ListVehiclesApiV1VehiclesGetResponse, CreateVehicleApiV1VehiclesPostData, CreateVehicleApiV1VehiclesPostError, CreateVehicleApiV1VehiclesPostResponse, ListAvailableVehiclesApiV1VehiclesAvailableGetData, ListAvailableVehiclesApiV1VehiclesAvailableGetError, ListAvailableVehiclesApiV1VehiclesAvailableGetResponse, GetVehicleApiV1VehiclesPlateGetData, GetVehicleApiV1VehiclesPlateGetError, GetVehicleApiV1VehiclesPlateGetResponse, UpdateVehicleApiV1VehiclesPlatePatchData, UpdateVehicleApiV1VehiclesPlatePatchError, UpdateVehicleApiV1VehiclesPlatePatchResponse, DeleteVehicleApiV1VehiclesPlateDeleteData, DeleteVehicleApiV1VehiclesPlateDeleteError, DeleteVehicleApiV1VehiclesPlateDeleteResponse, ListDriverStopsApiV1EmployeesStopsByDriverDriverUidGetData, ListDriverStopsApiV1EmployeesStopsByDriverDriverUidGetError, ListDriverStopsApiV1EmployeesStopsByDriverDriverUidGetResponse, GetStopApiV1EmployeesStopsStopIdGetData, GetStopApiV1EmployeesStopsStopIdGetError, GetStopApiV1EmployeesStopsStopIdGetResponse, UpdateDriverStopApiV1EmployeesStopsStopIdPatchData, UpdateDriverStopApiV1EmployeesStopsStopIdPatchError, UpdateDriverStopApiV1EmployeesStopsStopIdPatchResponse, DeleteDriverStopApiV1EmployeesStopsStopIdDeleteData, DeleteDriverStopApiV1EmployeesStopsStopIdDeleteError, DeleteDriverStopApiV1EmployeesStopsStopIdDeleteResponse, CreateDriverStopApiV1EmployeesStopsPostData, CreateDriverStopApiV1EmployeesStopsPostError, CreateDriverStopApiV1EmployeesStopsPostResponse, ListEmployeesApiV1EmployeesGetData, ListEmployeesApiV1EmployeesGetError, ListEmployeesApiV1EmployeesGetResponse, CreateEmployeeApiV1EmployeesPostData, CreateEmployeeApiV1EmployeesPostError, CreateEmployeeApiV1EmployeesPostResponse, SearchEmployeesApiV1EmployeesSearchGetData, SearchEmployeesApiV1EmployeesSearchGetError, SearchEmployeesApiV1EmployeesSearchGetResponse, ListAvailableEmployeesApiV1EmployeesAvailableGetData, ListAvailableEmployeesApiV1EmployeesAvailableGetError, ListAvailableEmployeesApiV1EmployeesAvailableGetResponse, GetEmployeeApiV1EmployeesEmployeeUidGetData, GetEmployeeApiV1EmployeesEmployeeUidGetError, GetEmployeeApiV1EmployeesEmployeeUidGetResponse, UpdateEmployeeApiV1EmployeesEmployeeUidPatchData, UpdateEmployeeApiV1EmployeesEmployeeUidPatchError, UpdateEmployeeApiV1EmployeesEmployeeUidPatchResponse, DeleteEmployeeApiV1EmployeesEmployeeUidDeleteData, DeleteEmployeeApiV1EmployeesEmployeeUidDeleteError, DeleteEmployeeApiV1EmployeesEmployeeUidDeleteResponse, LockTourDayApiV1ReservationsTourDaysLockTourDayIdPatchData, LockTourDayApiV1ReservationsTourDaysLockTourDayIdPatchError, LockTourDayApiV1ReservationsTourDaysLockTourDayIdPatchResponse, CancelApiV1ReservationsTourDaysCancelTourDayIdPatchData, CancelApiV1ReservationsTourDaysCancelTourDayIdPatchError, CancelApiV1ReservationsTourDaysCancelTourDayIdPatchResponse, GetTourDayApiV1ReservationsTourDaysTourDayIdGetData, GetTourDayApiV1ReservationsTourDaysTourDayIdGetError, GetTourDayApiV1ReservationsTourDaysTourDayIdGetResponse, UpdateTourDayApiV1ReservationsTourDaysTourDayIdPatchData, UpdateTourDayApiV1ReservationsTourDaysTourDayIdPatchError, UpdateTourDayApiV1ReservationsTourDaysTourDayIdPatchResponse, GetMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGetData, GetMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGetError, GetMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGetResponse, CreateReservationApiV1ReservationsPostData, CreateReservationApiV1ReservationsPostError, CreateReservationApiV1ReservationsPostResponse, ListReservationsApiV1ReservationsGetData, ListReservationsApiV1ReservationsGetError, ListReservationsApiV1ReservationsGetResponse, GetReservationsByDateApiV1ReservationsByDateTourDateGetData, GetReservationsByDateApiV1ReservationsByDateTourDateGetError, GetReservationsByDateApiV1ReservationsByDateTourDateGetResponse, GetCountByFilterApiV1ReservationsCountByFilterGetData, GetCountByFilterApiV1ReservationsCountByFilterGetError, GetCountByFilterApiV1ReservationsCountByFilterGetResponse, GetReservationApiV1ReservationsReservationIdGetData, GetReservationApiV1ReservationsReservationIdGetError, GetReservationApiV1ReservationsReservationIdGetResponse, LockReservationApiV1ReservationsLockReservationIdPatchData, LockReservationApiV1ReservationsLockReservationIdPatchError, LockReservationApiV1ReservationsLockReservationIdPatchResponse, ListUsersApiV1UsersGetError, ListUsersApiV1UsersGetResponse, GetCurrentApiV1UsersCurrentGetError, GetCurrentApiV1UsersCurrentGetResponse, GetUserApiV1UsersSubGetData, GetUserApiV1UsersSubGetError, GetUserApiV1UsersSubGetResponse, ListServiceTypesApiV1ServicesTypesGetError, ListServiceTypesApiV1ServicesTypesGetResponse, CreateServiceTypeApiV1ServicesTypesPostData, CreateServiceTypeApiV1ServicesTypesPostError, CreateServiceTypeApiV1ServicesTypesPostResponse, GetServiceTypeByIdApiV1ServicesTypesServiceTypeIdGetData, GetServiceTypeByIdApiV1ServicesTypesServiceTypeIdGetError, GetServiceTypeByIdApiV1ServicesTypesServiceTypeIdGetResponse, UpdateServiceTypeApiV1ServicesTypesServiceTypeIdPatchData, UpdateServiceTypeApiV1ServicesTypesServiceTypeIdPatchError, UpdateServiceTypeApiV1ServicesTypesServiceTypeIdPatchResponse, DeleteServiceTypeApiV1ServicesTypesServiceTypeIdDeleteData, DeleteServiceTypeApiV1ServicesTypesServiceTypeIdDeleteError, DeleteServiceTypeApiV1ServicesTypesServiceTypeIdDeleteResponse, ListServicesApiV1ServicesGetError, ListServicesApiV1ServicesGetResponse, CreateServiceApiV1ServicesPostData, CreateServiceApiV1ServicesPostError, CreateServiceApiV1ServicesPostResponse, GetServiceByIdApiV1ServicesServiceIdGetData, GetServiceByIdApiV1ServicesServiceIdGetError, GetServiceByIdApiV1ServicesServiceIdGetResponse, UpdateServiceApiV1ServicesServiceIdPatchData, UpdateServiceApiV1ServicesServiceIdPatchError, UpdateServiceApiV1ServicesServiceIdPatchResponse, DeleteServiceApiV1ServicesServiceIdDeleteData, DeleteServiceApiV1ServicesServiceIdDeleteError, DeleteServiceApiV1ServicesServiceIdDeleteResponse, DeactivateServiceApiV1ServicesDeactivateServiceIdPatchData, DeactivateServiceApiV1ServicesDeactivateServiceIdPatchError, DeactivateServiceApiV1ServicesDeactivateServiceIdPatchResponse, LoginAuthLoginPostData, LoginAuthLoginPostError, LoginAuthLoginPostResponse, LoginWithGoogleAuthLoginWithGooglePostData, LoginWithGoogleAuthLoginWithGooglePostError, LoginWithGoogleAuthLoginWithGooglePostResponse, LogoutAuthLogoutPostError, LogoutAuthLogoutPostResponse, RefreshTokenAuthRefreshTokenPostData, RefreshTokenAuthRefreshTokenPostError, RefreshTokenAuthRefreshTokenPostResponse, GetCodeAuthGetCodePostData, GetCodeAuthGetCodePostError, GetCodeAuthGetCodePostResponse, CreateUserAuthPostData, CreateUserAuthPostError, CreateUserAuthPostResponse, ListLanguagesLanguagesGetError, ListLanguagesLanguagesGetResponse, GetLanguageByCodeLanguagesByCodeLanguageCodeGetData, GetLanguageByCodeLanguagesByCodeLanguageCodeGetError, GetLanguageByCodeLanguagesByCodeLanguageCodeGetResponse, PingGetError, PingGetResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * List Tour Agencies
 */
export const listTourAgenciesApiV1TourAgentsTourAgenciesGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListTourAgenciesApiV1TourAgentsTourAgenciesGetResponse, ListTourAgenciesApiV1TourAgentsTourAgenciesGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents/tour-agencies'
    });
};

/**
 * Create Agency
 */
export const createAgencyApiV1TourAgentsTourAgenciesPost = <ThrowOnError extends boolean = false>(options: Options<CreateAgencyApiV1TourAgentsTourAgenciesPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateAgencyApiV1TourAgentsTourAgenciesPostResponse, CreateAgencyApiV1TourAgentsTourAgenciesPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents/tour-agencies'
    });
};

/**
 * Get By Id
 */
export const getByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGet = <ThrowOnError extends boolean = false>(options: Options<GetByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGetResponse, GetByIdApiV1TourAgentsTourAgenciesByIdTourAgencyIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents/tour-agencies/by-id/{tour_agency_id}'
    });
};

/**
 * Query Tour Agencies
 */
export const queryTourAgenciesApiV1TourAgentsTourAgenciesSearchPost = <ThrowOnError extends boolean = false>(options: Options<QueryTourAgenciesApiV1TourAgentsTourAgenciesSearchPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<QueryTourAgenciesApiV1TourAgentsTourAgenciesSearchPostResponse, QueryTourAgenciesApiV1TourAgentsTourAgenciesSearchPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents/tour-agencies/search'
    });
};

/**
 * List Agents
 */
export const listAgentsApiV1TourAgentsGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListAgentsApiV1TourAgentsGetResponse, ListAgentsApiV1TourAgentsGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents'
    });
};

/**
 * Create Agent
 */
export const createAgentApiV1TourAgentsPost = <ThrowOnError extends boolean = false>(options: Options<CreateAgentApiV1TourAgentsPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateAgentApiV1TourAgentsPostResponse, CreateAgentApiV1TourAgentsPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents'
    });
};

/**
 * Query Agents
 */
export const queryAgentsApiV1TourAgentsSearchPost = <ThrowOnError extends boolean = false>(options: Options<QueryAgentsApiV1TourAgentsSearchPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<QueryAgentsApiV1TourAgentsSearchPostResponse, QueryAgentsApiV1TourAgentsSearchPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents/search'
    });
};

/**
 * Get Agent
 */
export const getAgentApiV1TourAgentsAgentUidGet = <ThrowOnError extends boolean = false>(options: Options<GetAgentApiV1TourAgentsAgentUidGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetAgentApiV1TourAgentsAgentUidGetResponse, GetAgentApiV1TourAgentsAgentUidGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents/{agent_uid}'
    });
};

/**
 * Update Agent
 */
export const updateAgentApiV1TourAgentsAgentUidPatch = <ThrowOnError extends boolean = false>(options: Options<UpdateAgentApiV1TourAgentsAgentUidPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateAgentApiV1TourAgentsAgentUidPatchResponse, UpdateAgentApiV1TourAgentsAgentUidPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents/{agent_uid}'
    });
};

/**
 * Delete Agent
 */
export const deleteAgentApiV1TourAgentsAgentUidDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteAgentApiV1TourAgentsAgentUidDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteAgentApiV1TourAgentsAgentUidDeleteResponse, DeleteAgentApiV1TourAgentsAgentUidDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/tour-agents/{agent_uid}'
    });
};

/**
 * List Stops
 */
export const listStopsApiV1VehiclesStopsByPlatePlateGet = <ThrowOnError extends boolean = false>(options: Options<ListStopsApiV1VehiclesStopsByPlatePlateGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListStopsApiV1VehiclesStopsByPlatePlateGetResponse, ListStopsApiV1VehiclesStopsByPlatePlateGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/stops/by-plate/{plate}'
    });
};

/**
 * Get Stop
 */
export const getStopApiV1VehiclesStopsStopIdGet = <ThrowOnError extends boolean = false>(options: Options<GetStopApiV1VehiclesStopsStopIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetStopApiV1VehiclesStopsStopIdGetResponse, GetStopApiV1VehiclesStopsStopIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/stops/{stop_id}'
    });
};

/**
 * Update Driver Stop
 */
export const updateDriverStopApiV1VehiclesStopsStopIdPatch = <ThrowOnError extends boolean = false>(options: Options<UpdateDriverStopApiV1VehiclesStopsStopIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateDriverStopApiV1VehiclesStopsStopIdPatchResponse, UpdateDriverStopApiV1VehiclesStopsStopIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/stops/{stop_id}'
    });
};

/**
 * Delete Driver Stop
 */
export const deleteDriverStopApiV1VehiclesStopsStopIdDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteDriverStopApiV1VehiclesStopsStopIdDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteDriverStopApiV1VehiclesStopsStopIdDeleteResponse, DeleteDriverStopApiV1VehiclesStopsStopIdDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/stops/{stop_id}'
    });
};

/**
 * Create Driver Stop
 */
export const createDriverStopApiV1VehiclesStopsPost = <ThrowOnError extends boolean = false>(options: Options<CreateDriverStopApiV1VehiclesStopsPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateDriverStopApiV1VehiclesStopsPostResponse, CreateDriverStopApiV1VehiclesStopsPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/stops'
    });
};

/**
 * List Vehicles
 */
export const listVehiclesApiV1VehiclesGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListVehiclesApiV1VehiclesGetResponse, ListVehiclesApiV1VehiclesGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles'
    });
};

/**
 * Create Vehicle
 */
export const createVehicleApiV1VehiclesPost = <ThrowOnError extends boolean = false>(options: Options<CreateVehicleApiV1VehiclesPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateVehicleApiV1VehiclesPostResponse, CreateVehicleApiV1VehiclesPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles'
    });
};

/**
 * List Available Vehicles
 */
export const listAvailableVehiclesApiV1VehiclesAvailableGet = <ThrowOnError extends boolean = false>(options: Options<ListAvailableVehiclesApiV1VehiclesAvailableGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListAvailableVehiclesApiV1VehiclesAvailableGetResponse, ListAvailableVehiclesApiV1VehiclesAvailableGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/available'
    });
};

/**
 * Get Vehicle
 */
export const getVehicleApiV1VehiclesPlateGet = <ThrowOnError extends boolean = false>(options: Options<GetVehicleApiV1VehiclesPlateGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetVehicleApiV1VehiclesPlateGetResponse, GetVehicleApiV1VehiclesPlateGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/{plate}'
    });
};

/**
 * Update Vehicle
 */
export const updateVehicleApiV1VehiclesPlatePatch = <ThrowOnError extends boolean = false>(options: Options<UpdateVehicleApiV1VehiclesPlatePatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateVehicleApiV1VehiclesPlatePatchResponse, UpdateVehicleApiV1VehiclesPlatePatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/{plate}'
    });
};

/**
 * Delete Vehicle
 */
export const deleteVehicleApiV1VehiclesPlateDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteVehicleApiV1VehiclesPlateDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteVehicleApiV1VehiclesPlateDeleteResponse, DeleteVehicleApiV1VehiclesPlateDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/vehicles/{plate}'
    });
};

/**
 * List Driver Stops
 */
export const listDriverStopsApiV1EmployeesStopsByDriverDriverUidGet = <ThrowOnError extends boolean = false>(options: Options<ListDriverStopsApiV1EmployeesStopsByDriverDriverUidGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListDriverStopsApiV1EmployeesStopsByDriverDriverUidGetResponse, ListDriverStopsApiV1EmployeesStopsByDriverDriverUidGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/stops/by-driver/{driver_uid}'
    });
};

/**
 * Get Stop
 */
export const getStopApiV1EmployeesStopsStopIdGet = <ThrowOnError extends boolean = false>(options: Options<GetStopApiV1EmployeesStopsStopIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetStopApiV1EmployeesStopsStopIdGetResponse, GetStopApiV1EmployeesStopsStopIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/stops/{stop_id}'
    });
};

/**
 * Update Driver Stop
 */
export const updateDriverStopApiV1EmployeesStopsStopIdPatch = <ThrowOnError extends boolean = false>(options: Options<UpdateDriverStopApiV1EmployeesStopsStopIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateDriverStopApiV1EmployeesStopsStopIdPatchResponse, UpdateDriverStopApiV1EmployeesStopsStopIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/stops/{stop_id}'
    });
};

/**
 * Delete Driver Stop
 */
export const deleteDriverStopApiV1EmployeesStopsStopIdDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteDriverStopApiV1EmployeesStopsStopIdDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteDriverStopApiV1EmployeesStopsStopIdDeleteResponse, DeleteDriverStopApiV1EmployeesStopsStopIdDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/stops/{stop_id}'
    });
};

/**
 * Create Driver Stop
 */
export const createDriverStopApiV1EmployeesStopsPost = <ThrowOnError extends boolean = false>(options: Options<CreateDriverStopApiV1EmployeesStopsPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateDriverStopApiV1EmployeesStopsPostResponse, CreateDriverStopApiV1EmployeesStopsPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/stops'
    });
};

/**
 * List Employees
 */
export const listEmployeesApiV1EmployeesGet = <ThrowOnError extends boolean = false>(options?: Options<ListEmployeesApiV1EmployeesGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListEmployeesApiV1EmployeesGetResponse, ListEmployeesApiV1EmployeesGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees'
    });
};

/**
 * Create Employee
 */
export const createEmployeeApiV1EmployeesPost = <ThrowOnError extends boolean = false>(options: Options<CreateEmployeeApiV1EmployeesPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateEmployeeApiV1EmployeesPostResponse, CreateEmployeeApiV1EmployeesPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees'
    });
};

/**
 * Search Employees
 */
export const searchEmployeesApiV1EmployeesSearchGet = <ThrowOnError extends boolean = false>(options?: Options<SearchEmployeesApiV1EmployeesSearchGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<SearchEmployeesApiV1EmployeesSearchGetResponse, SearchEmployeesApiV1EmployeesSearchGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/search'
    });
};

/**
 * List Available Employees
 */
export const listAvailableEmployeesApiV1EmployeesAvailableGet = <ThrowOnError extends boolean = false>(options: Options<ListAvailableEmployeesApiV1EmployeesAvailableGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListAvailableEmployeesApiV1EmployeesAvailableGetResponse, ListAvailableEmployeesApiV1EmployeesAvailableGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/available'
    });
};

/**
 * Get Employee
 */
export const getEmployeeApiV1EmployeesEmployeeUidGet = <ThrowOnError extends boolean = false>(options: Options<GetEmployeeApiV1EmployeesEmployeeUidGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetEmployeeApiV1EmployeesEmployeeUidGetResponse, GetEmployeeApiV1EmployeesEmployeeUidGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/{employee_uid}'
    });
};

/**
 * Update Employee
 */
export const updateEmployeeApiV1EmployeesEmployeeUidPatch = <ThrowOnError extends boolean = false>(options: Options<UpdateEmployeeApiV1EmployeesEmployeeUidPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateEmployeeApiV1EmployeesEmployeeUidPatchResponse, UpdateEmployeeApiV1EmployeesEmployeeUidPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/{employee_uid}'
    });
};

/**
 * Delete Employee
 */
export const deleteEmployeeApiV1EmployeesEmployeeUidDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteEmployeeApiV1EmployeesEmployeeUidDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteEmployeeApiV1EmployeesEmployeeUidDeleteResponse, DeleteEmployeeApiV1EmployeesEmployeeUidDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/employees/{employee_uid}'
    });
};

/**
 * Lock Tour Day
 */
export const lockTourDayApiV1ReservationsTourDaysLockTourDayIdPatch = <ThrowOnError extends boolean = false>(options: Options<LockTourDayApiV1ReservationsTourDaysLockTourDayIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<LockTourDayApiV1ReservationsTourDaysLockTourDayIdPatchResponse, LockTourDayApiV1ReservationsTourDaysLockTourDayIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/tour_days/lock/{tour_day_id}'
    });
};

/**
 * Cancel
 */
export const cancelApiV1ReservationsTourDaysCancelTourDayIdPatch = <ThrowOnError extends boolean = false>(options: Options<CancelApiV1ReservationsTourDaysCancelTourDayIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<CancelApiV1ReservationsTourDaysCancelTourDayIdPatchResponse, CancelApiV1ReservationsTourDaysCancelTourDayIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/tour_days/cancel/{tour_day_id}'
    });
};

/**
 * Get Tour Day
 */
export const getTourDayApiV1ReservationsTourDaysTourDayIdGet = <ThrowOnError extends boolean = false>(options: Options<GetTourDayApiV1ReservationsTourDaysTourDayIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTourDayApiV1ReservationsTourDaysTourDayIdGetResponse, GetTourDayApiV1ReservationsTourDaysTourDayIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/tour_days/{tour_day_id}'
    });
};

/**
 * Update Tour Day
 */
export const updateTourDayApiV1ReservationsTourDaysTourDayIdPatch = <ThrowOnError extends boolean = false>(options: Options<UpdateTourDayApiV1ReservationsTourDaysTourDayIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateTourDayApiV1ReservationsTourDaysTourDayIdPatchResponse, UpdateTourDayApiV1ReservationsTourDaysTourDayIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/tour_days/{tour_day_id}'
    });
};

/**
 * Get Multiple Tour Days
 */
export const getMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGet = <ThrowOnError extends boolean = false>(options: Options<GetMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGetResponse, GetMultipleTourDaysApiV1ReservationsTourDaysMultipleTourDayIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/tour_days/multiple/{tour_day_id}'
    });
};

/**
 * Create Reservation
 */
export const createReservationApiV1ReservationsPost = <ThrowOnError extends boolean = false>(options: Options<CreateReservationApiV1ReservationsPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateReservationApiV1ReservationsPostResponse, CreateReservationApiV1ReservationsPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations'
    });
};

/**
 * List Reservations
 */
export const listReservationsApiV1ReservationsGet = <ThrowOnError extends boolean = false>(options: Options<ListReservationsApiV1ReservationsGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<ListReservationsApiV1ReservationsGetResponse, ListReservationsApiV1ReservationsGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations'
    });
};

/**
 * Get Reservations By Date
 */
export const getReservationsByDateApiV1ReservationsByDateTourDateGet = <ThrowOnError extends boolean = false>(options: Options<GetReservationsByDateApiV1ReservationsByDateTourDateGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetReservationsByDateApiV1ReservationsByDateTourDateGetResponse, GetReservationsByDateApiV1ReservationsByDateTourDateGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/by-date/{tour_date}'
    });
};

/**
 * Get Count By Filter
 */
export const getCountByFilterApiV1ReservationsCountByFilterGet = <ThrowOnError extends boolean = false>(options: Options<GetCountByFilterApiV1ReservationsCountByFilterGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCountByFilterApiV1ReservationsCountByFilterGetResponse, GetCountByFilterApiV1ReservationsCountByFilterGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/count-by-filter'
    });
};

/**
 * Get Reservation
 */
export const getReservationApiV1ReservationsReservationIdGet = <ThrowOnError extends boolean = false>(options: Options<GetReservationApiV1ReservationsReservationIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetReservationApiV1ReservationsReservationIdGetResponse, GetReservationApiV1ReservationsReservationIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/{reservation_id}'
    });
};

/**
 * Lock Reservation
 */
export const lockReservationApiV1ReservationsLockReservationIdPatch = <ThrowOnError extends boolean = false>(options: Options<LockReservationApiV1ReservationsLockReservationIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<LockReservationApiV1ReservationsLockReservationIdPatchResponse, LockReservationApiV1ReservationsLockReservationIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/reservations/lock/{reservation_id}'
    });
};

/**
 * List Users
 * Retrieve all users.\n\nReturns:\n    UserSchema: The list of users.
 */
export const listUsersApiV1UsersGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListUsersApiV1UsersGetResponse, ListUsersApiV1UsersGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users'
    });
};

/**
 * Get Current
 */
export const getCurrentApiV1UsersCurrentGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCurrentApiV1UsersCurrentGetResponse, GetCurrentApiV1UsersCurrentGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/current'
    });
};

/**
 * Get User
 * Retrieve a user by their email address.
 *
 * Args:
 * user_email (str): The user's email.
 *
 * Returns:
 * UserSchema: The user.
 */
export const getUserApiV1UsersSubGet = <ThrowOnError extends boolean = false>(options: Options<GetUserApiV1UsersSubGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetUserApiV1UsersSubGetResponse, GetUserApiV1UsersSubGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/users/{sub}'
    });
};

/**
 * List Service Types
 */
export const listServiceTypesApiV1ServicesTypesGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListServiceTypesApiV1ServicesTypesGetResponse, ListServiceTypesApiV1ServicesTypesGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/types'
    });
};

/**
 * Create Service Type
 */
export const createServiceTypeApiV1ServicesTypesPost = <ThrowOnError extends boolean = false>(options: Options<CreateServiceTypeApiV1ServicesTypesPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateServiceTypeApiV1ServicesTypesPostResponse, CreateServiceTypeApiV1ServicesTypesPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/types'
    });
};

/**
 * Get Service Type By Id
 */
export const getServiceTypeByIdApiV1ServicesTypesServiceTypeIdGet = <ThrowOnError extends boolean = false>(options: Options<GetServiceTypeByIdApiV1ServicesTypesServiceTypeIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetServiceTypeByIdApiV1ServicesTypesServiceTypeIdGetResponse, GetServiceTypeByIdApiV1ServicesTypesServiceTypeIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/types/{service_type_id}'
    });
};

/**
 * Update Service Type
 */
export const updateServiceTypeApiV1ServicesTypesServiceTypeIdPatch = <ThrowOnError extends boolean = false>(options: Options<UpdateServiceTypeApiV1ServicesTypesServiceTypeIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateServiceTypeApiV1ServicesTypesServiceTypeIdPatchResponse, UpdateServiceTypeApiV1ServicesTypesServiceTypeIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/types/{service_type_id}'
    });
};

/**
 * Delete Service Type
 */
export const deleteServiceTypeApiV1ServicesTypesServiceTypeIdDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteServiceTypeApiV1ServicesTypesServiceTypeIdDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteServiceTypeApiV1ServicesTypesServiceTypeIdDeleteResponse, DeleteServiceTypeApiV1ServicesTypesServiceTypeIdDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/types/{service_type_id}'
    });
};

/**
 * List Services
 */
export const listServicesApiV1ServicesGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListServicesApiV1ServicesGetResponse, ListServicesApiV1ServicesGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/services'
    });
};

/**
 * Create Service
 */
export const createServiceApiV1ServicesPost = <ThrowOnError extends boolean = false>(options: Options<CreateServiceApiV1ServicesPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateServiceApiV1ServicesPostResponse, CreateServiceApiV1ServicesPostError, ThrowOnError>({
        ...options,
        url: '/api/v1/services'
    });
};

/**
 * Get Service By Id
 */
export const getServiceByIdApiV1ServicesServiceIdGet = <ThrowOnError extends boolean = false>(options: Options<GetServiceByIdApiV1ServicesServiceIdGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetServiceByIdApiV1ServicesServiceIdGetResponse, GetServiceByIdApiV1ServicesServiceIdGetError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/{service_id}'
    });
};

/**
 * Update Service
 */
export const updateServiceApiV1ServicesServiceIdPatch = <ThrowOnError extends boolean = false>(options: Options<UpdateServiceApiV1ServicesServiceIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<UpdateServiceApiV1ServicesServiceIdPatchResponse, UpdateServiceApiV1ServicesServiceIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/{service_id}'
    });
};

/**
 * Delete Service
 */
export const deleteServiceApiV1ServicesServiceIdDelete = <ThrowOnError extends boolean = false>(options: Options<DeleteServiceApiV1ServicesServiceIdDeleteData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteServiceApiV1ServicesServiceIdDeleteResponse, DeleteServiceApiV1ServicesServiceIdDeleteError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/{service_id}'
    });
};

/**
 * Deactivate Service
 */
export const deactivateServiceApiV1ServicesDeactivateServiceIdPatch = <ThrowOnError extends boolean = false>(options: Options<DeactivateServiceApiV1ServicesDeactivateServiceIdPatchData, ThrowOnError>) => {
    return (options?.client ?? client).patch<DeactivateServiceApiV1ServicesDeactivateServiceIdPatchResponse, DeactivateServiceApiV1ServicesDeactivateServiceIdPatchError, ThrowOnError>({
        ...options,
        url: '/api/v1/services/deactivate/{service_id}'
    });
};

/**
 * Login
 */
export const loginAuthLoginPost = <ThrowOnError extends boolean = false>(options: Options<LoginAuthLoginPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<LoginAuthLoginPostResponse, LoginAuthLoginPostError, ThrowOnError>({
        ...options,
        url: '/auth/login'
    });
};

/**
 * Login With Google
 * Logs a user in using Google Identity Services sign in.
 *
 * Receives the token, retrieves the user's sub from it, then looks up
 * the sub in the user's table. If no user is found, a new one is
 * created.
 *
 * Args:
 * session (SessionLocal): The DB session.
 * user (UserSchema): The user info decoded from the token.
 *
 * Returns:
 * UserwithTokens: The user from the DB and a pair of
 * token, refresh token.
 */
export const loginWithGoogleAuthLoginWithGooglePost = <ThrowOnError extends boolean = false>(options: Options<LoginWithGoogleAuthLoginWithGooglePostData, ThrowOnError>) => {
    return (options?.client ?? client).post<LoginWithGoogleAuthLoginWithGooglePostResponse, LoginWithGoogleAuthLoginWithGooglePostError, ThrowOnError>({
        ...options,
        url: '/auth/login-with-google'
    });
};

/**
 * Logout
 */
export const logoutAuthLogoutPost = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).post<LogoutAuthLogoutPostResponse, LogoutAuthLogoutPostError, ThrowOnError>({
        ...options,
        url: '/auth/logout'
    });
};

/**
 * Refresh Token
 */
export const refreshTokenAuthRefreshTokenPost = <ThrowOnError extends boolean = false>(options: Options<RefreshTokenAuthRefreshTokenPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<RefreshTokenAuthRefreshTokenPostResponse, RefreshTokenAuthRefreshTokenPostError, ThrowOnError>({
        ...options,
        url: '/auth/refresh-token'
    });
};

/**
 * Get Code
 */
export const getCodeAuthGetCodePost = <ThrowOnError extends boolean = false>(options: Options<GetCodeAuthGetCodePostData, ThrowOnError>) => {
    return (options?.client ?? client).post<GetCodeAuthGetCodePostResponse, GetCodeAuthGetCodePostError, ThrowOnError>({
        ...options,
        url: '/auth/get-code'
    });
};

/**
 * Create User
 */
export const createUserAuthPost = <ThrowOnError extends boolean = false>(options: Options<CreateUserAuthPostData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateUserAuthPostResponse, CreateUserAuthPostError, ThrowOnError>({
        ...options,
        url: '/auth'
    });
};

/**
 * List Languages
 */
export const listLanguagesLanguagesGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<ListLanguagesLanguagesGetResponse, ListLanguagesLanguagesGetError, ThrowOnError>({
        ...options,
        url: '/languages'
    });
};

/**
 * Get Language By Code
 */
export const getLanguageByCodeLanguagesByCodeLanguageCodeGet = <ThrowOnError extends boolean = false>(options: Options<GetLanguageByCodeLanguagesByCodeLanguageCodeGetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetLanguageByCodeLanguagesByCodeLanguageCodeGetResponse, GetLanguageByCodeLanguagesByCodeLanguageCodeGetError, ThrowOnError>({
        ...options,
        url: '/languages/by-code/{language_code}'
    });
};

/**
 * Ping
 */
export const pingGet = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<PingGetResponse, PingGetError, ThrowOnError>({
        ...options,
        url: '/'
    });
};