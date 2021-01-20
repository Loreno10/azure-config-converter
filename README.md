# Azure Config Converter

This tool converts JSON configuration files between the two following formats:

- Local .NET Core appsettings.json format

Example:

```json
{
    "Version": "1.0.0",
    "DatabaseOptions": {
        "ConnectionString": "default",
        "Retries": 3,
        "UseLegacyProtocol": false
    },
    "Tables": ["Table1", "Table2", "Table3"],
    "Items": [
        {
            "Name": "Item1",
            "Value": 0
        },
        {
            "Name": "Item2",
            "Value": 1
        }
    ]
}
```

- Azure Web App configuration

Example:

```json
[
  {
    "slotSetting": false,
    "name": "Version",
    "value": "1.0.0"
  },
  {
    "slotSetting": false,
    "name": "DatabaseOptions__ConnectionString",
    "value": "default"
  },
  {
    "slotSetting": false,
    "name": "DatabaseOptions__Retries",
    "value": 3
  },
  {
    "slotSetting": false,
    "name": "DatabaseOptions__UseLegacyProtocol",
    "value": false
  },
  {
    "slotSetting": false,
    "name": "Tables__0",
    "value": "Table1"
  },
  {
    "slotSetting": false,
    "name": "Tables__1",
    "value": "Table2"
  },
  {
    "slotSetting": false,
    "name": "Tables__2",
    "value": "Table3"
  },
  {
    "slotSetting": false,
    "name": "Items__0__Name",
    "value": "Item1"
  },
  {
    "slotSetting": false,
    "name": "Items__0__Value",
    "value": 0
  },
  {
    "slotSetting": false,
    "name": "Items__1__Name",
    "value": "Item2"
  },
  {
    "slotSetting": false,
    "name": "Items__1__Value",
    "value": 1
  }
]
```

The conversion works in both ways (currently only local -> Azure is supported).

The tool is quite useful when moving from local development environment to Azure
App Service. It is also useful when setting up a local environment based on the
configuration in the cloud.