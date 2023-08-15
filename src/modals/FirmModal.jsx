import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { Form, Formik } from "formik";
import { TextField } from "@mui/material";
import useStockCall from "../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "4px solid #000",
  boxShadow: 30,
  p: 4,
};

export default function FirmModal({ open, setOpen }) {
  const { createStockData } = useStockCall();
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Formik
              initialValues={{ name: "", phone: "", image: "", address: "" }}
              onSubmit={(values) => {
                handleClose();
                createStockData("firms", values);
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, values }) => (
                <Form>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <TextField
                      label="Name"
                      name="name"
                      id="name"
                      type="text"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <TextField
                      label="Phone"
                      name="phone"
                      id="phone"
                      type="tel"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <TextField
                      label="Address"
                      name="address"
                      id="address"
                      type="address"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                    <TextField
                      label="Image"
                      name="image"
                      id="image"
                      type="url"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                    />
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
