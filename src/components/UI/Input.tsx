import React, { useReducer, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

interface InitialStateType {
  value?: string | null;
  isValid?: boolean;
  touched?: boolean;
}

interface IAction {
  type: string;
  value?: string;
  isValid?: boolean;
}

interface Props {
  id: string;
  label: string | null;
  keyboardType: any;
  secureTextEntry: boolean;
  required: boolean;
  minLength: number;
  autoCapitalize: any;
  errorText: string;
  initialValue: string;
  initiallyValid: boolean;
  email?: string | null;
  min?: number | null;
  max?: number | null;
  value?: string | null;
  textContentType: any;
  returnKeyType: any;
  placeholder?: string;
  placeholderTextColor?: any;
  onInputChange: (id: string, x?: string | null, y?: boolean) => void;
}

const inputReducer = (state: InitialStateType, action: IAction) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input: React.FC<Props> = (props) => {
  const initialState = {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false,
  };

  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const { onInputChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (text: string) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={inputState.value!}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontFamily: "gilroy-bold",
    color: "#7C7C7C",
    marginBottom: hp("2%"),
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    marginTop: hp("1%"),
    fontFamily: "gilroy-regular",
    color: "red",
    fontSize: 13,
  },
});

export default Input;
