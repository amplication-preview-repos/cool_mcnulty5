import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { FlightTitle } from "../flight/FlightTitle";

export const PositionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="flight.id" reference="Flight" label="Flight">
          <SelectInput optionText={FlightTitle} />
        </ReferenceInput>
        <NumberInput label="lat" source="lat" />
        <NumberInput label="lon" source="lon" />
      </SimpleForm>
    </Create>
  );
};
