export enum OCPP16SupportedFeatureProfiles {
  Core = 'Core',
  FirmwareManagement = 'FirmwareManagement',
  LocalAuthListManagement = 'LocalAuthListManagement',
  RemoteTrigger = 'RemoteTrigger',
  Reservation = 'Reservation',
  SmartCharging = 'SmartCharging'
}

export enum OCPP16StandardParametersKey {
  AllowOfflineTxForUnknownId = 'AllowOfflineTxForUnknownId',
  AuthorizationCacheEnabled = 'AuthorizationCacheEnabled',
  AuthorizeRemoteTxRequests = 'AuthorizeRemoteTxRequests',
  BlinkRepeat = 'BlinkRepeat',
  ChargeProfileMaxStackLevel = 'ChargeProfileMaxStackLevel',
  ChargingScheduleAllowedChargingRateUnit = 'ChargingScheduleAllowedChargingRateUnit',
  ChargingScheduleMaxPeriods = 'ChargingScheduleMaxPeriods',
  ClockAlignedDataInterval = 'ClockAlignedDataInterval',
  ConnectionTimeOut = 'ConnectionTimeOut',
  ConnectorPhaseRotation = 'ConnectorPhaseRotation',
  ConnectorPhaseRotationMaxLength = 'ConnectorPhaseRotationMaxLength',
  ConnectorSwitch3to1PhaseSupported = 'ConnectorSwitch3to1PhaseSupported',
  GetConfigurationMaxKeys = 'GetConfigurationMaxKeys',
  HeartbeatInterval = 'HeartbeatInterval',
  HeartBeatInterval = 'HeartBeatInterval',
  LightIntensity = 'LightIntensity',
  LocalAuthListEnabled = 'LocalAuthListEnabled',
  LocalAuthListMaxLength = 'LocalAuthListMaxLength',
  LocalAuthorizeOffline = 'LocalAuthorizeOffline',
  LocalPreAuthorize = 'LocalPreAuthorize',
  MaxChargingProfilesInstalled = 'MaxChargingProfilesInstalled',
  MaxEnergyOnInvalidId = 'MaxEnergyOnInvalidId',
  MeterValuesAlignedData = 'MeterValuesAlignedData',
  MeterValuesAlignedDataMaxLength = 'MeterValuesAlignedDataMaxLength',
  MeterValueSampleInterval = 'MeterValueSampleInterval',
  MeterValuesSampledData = 'MeterValuesSampledData',
  MeterValuesSampledDataMaxLength = 'MeterValuesSampledDataMaxLength',
  MinimumStatusDuration = 'MinimumStatusDuration',
  NumberOfConnectors = 'NumberOfConnectors',
  ReserveConnectorZeroSupported = 'ReserveConnectorZeroSupported',
  ResetRetries = 'ResetRetries',
  SendLocalListMaxLength = 'SendLocalListMaxLength',
  StopTransactionOnEVSideDisconnect = 'StopTransactionOnEVSideDisconnect',
  StopTransactionOnInvalidId = 'StopTransactionOnInvalidId',
  StopTxnAlignedData = 'StopTxnAlignedData',
  StopTxnAlignedDataMaxLength = 'StopTxnAlignedDataMaxLength',
  StopTxnSampledData = 'StopTxnSampledData',
  StopTxnSampledDataMaxLength = 'StopTxnSampledDataMaxLength',
  SupportedFeatureProfiles = 'SupportedFeatureProfiles',
  SupportedFeatureProfilesMaxLength = 'SupportedFeatureProfilesMaxLength',
  TransactionMessageAttempts = 'TransactionMessageAttempts',
  TransactionMessageRetryInterval = 'TransactionMessageRetryInterval',
  UnlockConnectorOnEVSideDisconnect = 'UnlockConnectorOnEVSideDisconnect',
  WebSocketPingInterval = 'WebSocketPingInterval'
}

export enum OCPP16VendorParametersKey {
  ConnectionUrl = 'ConnectionUrl'
}
