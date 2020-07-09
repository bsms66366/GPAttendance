import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function Users() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .onSnapshot(() => {
        // see next step
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  // ...
}