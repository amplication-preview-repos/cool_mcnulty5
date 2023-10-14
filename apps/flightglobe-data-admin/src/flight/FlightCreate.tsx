import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PositionTitle } from "../position/PositionTitle";

export const FlightCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AircraftType" source="aircraftType" />
        <TextInput label="ICAO" source="icao" />
        <ReferenceArrayInput
          source="positions"
          reference="Position"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PositionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
