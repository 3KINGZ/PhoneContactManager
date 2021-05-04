import { useReducer } from "react";
import * as ImagePicker from "react-native-image-picker/src";
interface IActions {
  setName: any;
  setAddress: any;
  updateNumber: any;
  updateImage: any;
  updateEmail: any;
}

const types = {
  updateName: "UPDATE_NAME",
  updateAddress: "UPDATE_ADDRESS",
  updateNumber: "UPDATE_NUMBER",
  updateImage: "UPDATE_IMAGE",
  updateEmail: "UPDATE_EMAIL",
};

const initialState = (initalValues: any) => {
  if (initalValues) {
    return {
      name: initalValues.name,
      address: initalValues.address,
      number: initalValues.number,
      image: initalValues.image,
      email: initalValues.email,
    };
  }

  return {
    name: "",
    address: "",
    number: "",
    image: "",
    email: "",
  };
};

const reducer = (state: any, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case types.updateName:
      return { ...state, name: payload };

    case types.updateAddress:
      return { ...state, address: payload };

    case types.updateNumber:
      return { ...state, number: payload };

    case types.updateImage:
      return { ...state, image: payload };

    case types.updateEmail:
      return { ...state, email: payload };

    default:
      return state;
  }
};

export const useForm = (initialValues?: any) => {
  const [state, dispatch] = useReducer(reducer, initialState(initialValues));

  const actions: any = {
    setName: (value: string) =>
      dispatch({ type: types.updateName, payload: value }),

    setAddress: (value: string) =>
      dispatch({ type: types.updateAddress, payload: value }),

    setNumber: (value: string) =>
      dispatch({ type: types.updateNumber, payload: value }),

    setImage: (value: string) =>
      dispatch({ type: types.updateImage, payload: value }),

    setEmail: (value: string) =>
      dispatch({ type: types.updateEmail, payload: value }),
  };

  const options = [
    {
      id: "1",
      title: "Open Camera",
      action: () =>
        ImagePicker.launchCamera(
          { mediaType: "photo", cameraType: "back" },
          () => console.log("opening camera"),
        ),
    },
    {
      id: "2",
      title: "Open Gallery",
      action: () =>
        ImagePicker.launchImageLibrary({ mediaType: "photo" }, (image: any) =>
          actions.setImage(image),
        ),
    },
    {
      id: "3",
      title: "Remove Image",
      action: () => actions.setImage(""),
    },
  ];

  return [state, actions, options];
};
