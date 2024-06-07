import { useCallback, useEffect, useState } from "react";
import { api } from "../config/axios";
import { User } from "../models/User";

type Props = {
  activity_id?: string | number;
  refresh?: Date;
};

export const useFetchProfile = () => {
  const [profile, setProfile] = useState<User>();
  const [isFetching, setIsFetching] = useState(false);

  const returnProfile = useCallback(() => {
    setIsFetching(true);
    api
      .get("/user")
      .then((response) => {
        const data = response.data;
        setProfile(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    returnProfile();
  }, [returnProfile]);

  return {
    profile,
    isFetching,
  };
};
