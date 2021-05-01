import { useReducer } from "react";
import * as ImagePicker from "react-native-image-picker/src";
interface IActions {
  setName: any;
  setAddress: any;
  updateNumber: any;
  updateImage: any;
}

const types = {
  updateName: "UPDATE_NAME",
  updateAddress: "UPDATE_ADDRESS",
  updateNumber: "UPDATE_NUMBER",
  updateImage: "UPDATE_IMAGE",
};

const initialState = {
  name: "",
  address: "",
  number: "",
  image: "",
};

const reducer = (
  state: { name: string; address: string; number: string; image: string },
  action: { type: string; payload: any },
) => {
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

    default:
      return state;
  }
};

export const useForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: any = {
    setName: (value: string) =>
      dispatch({ type: types.updateName, payload: value }),

    setAddress: (value: string) =>
      dispatch({ type: types.updateAddress, payload: value }),

    setNumber: (value: string) =>
      dispatch({ type: types.updateNumber, payload: value }),

    setImage: (value: string) =>
      dispatch({ type: types.updateImage, payload: value }),
  };

  const options = [
    {
      id: "1",
      title: "Open Camera",
      action: () =>
        ImagePicker.launchCamera(
          { mediaType: "photo", cameraType: "back" },
          () => console.log("hi"),
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
