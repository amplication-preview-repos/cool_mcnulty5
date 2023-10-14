import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { FlightTitle } from "../flight/FlightTitle";

export const PositionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="flight.id" reference="Flight" label="Flight">
          <SelectInput optionText={FlightTitle} />
        </ReferenceInput>
        <NumberInput label="lat" source="lat" />
        <NumberInput label="lon" source="lon" />
      </SimpleForm>
    </Edit>
  );
};
