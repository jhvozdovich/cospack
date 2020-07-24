
import React from "react";
import PropTypes from "prop-types";
import ReusableCosplayForm from "./ReusableCosplayForm";
import { useFirestore } from "react-redux-firebase"

function NewCosplayForm(props) {
  const firestore = useFirestore();
  function addCosplayToFirestore(event) {
    event.preventDefault();
    props.onNewCosplayCreation();
    return firestore.collection("Cosplays").add({
      character: event.target.character.value,
      series: event.target.series.value,
      startDate: event.target.startDate.value,
      dueDate: event.target.dueDate.value,
      // PHOTO UPLOAD????
      notes: event.target.notes.value
    })
  }

  return (
    <React.Fragment>
      <ReusableCosplayForm
        formSubmissionHandler={addCosplayToFirestore}
        buttonText="Help!" />
    </React.Fragment>
  )
}

NewCosplayForm.propTypes = {
  onNewCosplayCreation: PropTypes.func
}

export default NewCosplayForm;