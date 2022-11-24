

import { db } from "../../firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

//this is for users 
  const userCollectionRef = collection(db, "users");
    //this for airlines
    const airlineCollectionRef = collection(db, "airlines");
    //this for distinations
    const destiCollectionRef = collection(db, "destinations");
    //this for classes
    const classCollectionRef = collection(db, "classes");
    //this for flights
    const flightCollectionRef = collection(db, "flights");
    //this for seasonalfares
    const seasonalCollectionRef = collection(db, "seasonalfares")

class AllData {
    //  this portion for users
    addUsers = (newUser) => {
      return addDoc(userCollectionRef, newUser);
    };
  
    updateUser = (id, updatedUser) => {
      const userDoc = doc(db, "users", id);
      return updateDoc(userDoc, updatedUser);
    };
  
    deleteUser = (id) => {
      const userDoc = doc(db, "users", id);
      return deleteDoc(userDoc);
    };
  
    getAllUsers = () => {
      return getDocs(userCollectionRef);
    };
  
    getUser = (id) => {
      const userDoc = doc(db, "users", id);
      return getDoc(userDoc);
    };


    //this for airlines



    addAirlines = (newAirline) => {
        return addDoc(airlineCollectionRef, newAirline);
      };
    
      updateAirline = (id, updatedAirline) => {
        const airlineDoc = doc(db, "airlines", id);
        return updateDoc(airlineDoc, updatedAirline);
      };
    
      deleteAirline = (id) => {
        const airlineDoc = doc(db, "airlines", id);
        return deleteDoc(airlineDoc);
      };
    
      getAllAirlines = () => {
        return getDocs(airlineCollectionRef);
      };
    
      getAirline = (id) => {
        const airlineDoc = doc(db, "airlines", id);
        return getDoc(airlineDoc);
      };



    //this for distinations


    addDesti = (newDesti) => {
        return addDoc(destiCollectionRef, newDesti);
      };
    
      updatedDesti = (id, updatedDesti) => {
        const destiDoc = doc(db, "destinations", id);
        return updateDoc(destiDoc, updatedDesti);
      };
    
      deleteDesti = (id) => {
        const destiDoc = doc(db, "destinations", id);
        return deleteDoc(destiDoc);
      };
    
      getAllDesti = () => {
        return getDocs(destiCollectionRef);
      };
    
      getDesti = (id) => {
        const destiDoc = doc(db, "destinations", id);
        return getDoc(destiDoc);
      };

      //this section for classes

      addClasses = (newClass) => {
        return addDoc(classCollectionRef, newClass);
      };
    
      updateClass = (id, updatedClass) => {
        const classDoc = doc(db, "classes", id);
        return updateDoc(classDoc, updatedClass);
      };
    
      deleteClass = (id) => {
        const classDoc = doc(db, "classes", id);
        return deleteDoc(classDoc);
      };
    
      getAllClasses = () => {
        return getDocs(classCollectionRef);
      };
    
      getClass = (id) => {
        const classDoc = doc(db, "classes", id);
        return getDoc(classDoc);
      };

            //this section add flights

            addFlights = (newFlight) => {
              return addDoc(flightCollectionRef, newFlight);
            };
          
            updateFlight = (id, updatedFlight) => {
              const flightDoc = doc(db, "flights", id);
              return updateDoc(flightDoc, updatedFlight);
            };
          
            deleteFlight = (id) => {
              const flightDoc = doc(db, "flights", id);
              return deleteDoc(flightDoc);
            };
          
            getAllFlights = () => {
              return getDocs(flightCollectionRef);
            };
          
            getFlight = (id) => {
              const flightDoc = doc(db, "flights", id);
              return getDoc(flightDoc);
            };

            //this section for seasonal fare

            addSeasonal = (newSeasonal) => {
              return addDoc(seasonalCollectionRef, newSeasonal);
            };
          
            updateSeasonal = (id, updatedSeasonal) => {
              const SeasonalDoc = doc(db, "seasonalfares", id);
              return updateDoc(SeasonalDoc, updatedSeasonal);
            };
          
            deleteSeasonal = (id) => {
              const SeasonalDoc = doc(db, "seasonalfares", id);
              return deleteDoc(SeasonalDoc);
            };
          
            getAllSeasonal = () => {
              return getDocs(seasonalCollectionRef);
            };
          
            getSeasonal = (id) => {
              const SeasonalDoc = doc(db, "seasonalfares", id);
              return getDoc(SeasonalDoc); 
            };

    
  }
  export default new AllData();