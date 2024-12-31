import { useCallback, useRef, useState } from "react";
import utils from "./utils";

export function useLatest(value) {
  console.log("param-value: ", value);
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export function useSetState(initialState) {
  const [state, setState] = useState(initialState);

  const setMergeState = useCallback((patch) => {
    console.log("patch: ", patch);
    setState((prevState) => {
      const newState = utils.type.isFunction(patch) ? patch(prevState) : patch;
      return newState ? { ...prevState, ...newState } : prevState;
    });
  }, []);

  return [state, setMergeState];
}


let uniqueId = 0;
const getUniqueId = () => uniqueId++;
export function useId() {
  const cRef = useRef(null);
  const idRef = useRef(-1);
  if (cRef.current === null) {
    cRef.current = ':f' + getUniqueId();
  }
  function generateId() {
    idRef.current += 1;
    console.log("idRef: ", idRef.current)
    return cRef.current + ':' + idRef.current;
  }


  return {
    componentId: cRef.current,
    generateId,
  };
}