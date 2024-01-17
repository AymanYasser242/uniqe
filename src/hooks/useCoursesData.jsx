// useCourseData.js
import { useState } from "react";
import axios from "axios";
import { useMainContext } from "./useMainContext";
import { toast } from "react-toastify";

export const useCoursesData = () => {
  const { URL, user, setBackDrop } = useMainContext();
  const [course, setCourse] = useState();
  const [access, setAccess] = useState();
  const [coursesData, setCoursesData] = useState([]);

  const getCourse = async (courseId) => {
    try {
      setBackDrop(true);
      const response = await axios.get(
        URL + `/user/getcourse/?_id=${courseId}`
      );

      setBackDrop(false);
      let courseData = await response.data;
      setCourse(courseData);
    } catch (err) {
      setBackDrop(false);
      console.log(err);
      toast.error("حدث خطأ في الاتصال حاول مرة اخرى", {
        toastId: "errorToast",
      });
      if (err.response.data.message) {
        toast.update("errorToast", {
          render: err.response.data.message,
          type: toast.TYPE.ERROR,
        });
      }
    }
  };
  const getFullCourse = async (courseId) => {
    try {
      setBackDrop(true);
      const response = await axios.post(
        URL + `/user/getfullcourse`,
        { courseId: courseId },
        {
          headers: {
            authorization: `Bearer ${user.loginToken}`,
          },
        }
      );

      setBackDrop(false);
      let data = await response.data;
      let courseData = await data.course;
      setAccess(data.access);
      setCourse(courseData);
    } catch (err) {
      setBackDrop(false);
      console.log(err);
      toast.error("حدث خطأ في الاتصال حاول مرة اخرى", {
        toastId: "errorToast",
      });
      if (err.response.data.message) {
        toast.update("errorToast", {
          render: err.response.data.message,
          type: toast.TYPE.ERROR,
        });
      }
    }
  };

  const getCourses = async (coursesIds) => {
    try {
      setBackDrop(true);
      const response = await axios.post(URL + `/user/getcourses`, coursesIds);
      let data = await response.data;
      setCoursesData(data);
      setBackDrop(false);
    } catch (err) {
      setBackDrop(false);
      console.log(err);
      toast.error("حدث خطأ في الاتصال حاول مرة اخرى", {
        toastId: "errorToast",
      });
      if (err.response.data.message) {
        toast.update("errorToast", {
          render: err.response.data.message,
          type: toast.TYPE.ERROR,
        });
      }
    }
  };

  return {
    getCourse,
    getFullCourse,
    getCourses,
    course,
    coursesData,
    access,
  };
};
