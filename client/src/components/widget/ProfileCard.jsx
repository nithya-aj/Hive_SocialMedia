import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { MdEmail } from "react-icons/md";
import { HiAtSymbol } from "react-icons/hi";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdCake, MdEdit } from "react-icons/md";
import { FaUserAlt, FaUserTag } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import FlexCenter from "./FlexCenter";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const user = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts, "posts");
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const main = theme.palette.neutral.main;
  const light = theme.palette.neutral.light;
  const purple = theme.palette.neutral.purple;
  const [edit, setEdit] = useState(false);

  const followers = user.followers.length;
  const followings = user.followings.length;
  const postCount = posts.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("edited!");
  };

  const data = [
    {
      icon: <HiAtSymbol />,
      name: user.username,
    },
    {
      icon: <FaUserAlt style={{ fontSize: "0.8rem" }} />,
      name: user.name,
    },
    {
      icon: <MdEmail />,
      name: user.email,
    },
    {
      icon: <FaUserTag />,
      name: user.desc,
    },
    {
      icon: <HiBuildingOffice />,
      name: user.place,
    },
    {
      icon: <MdCake />,
      name: user.dob,
    },
  ];

  const userData = [
    {
      title: "Followers",
      value: followers,
    },
    {
      title: "Following",
      value: followings,
    },
    {
      title: "Posts",
      value: postCount,
    },
  ];

  return (
    <Card
      sx={{ borderRadius: "10px", backgroundColor: darkbg, boxShadow: "none" }}
    >
      <FlexCenter
        sx={{
          bgcolor: light,
          flexDirection: "column",
          p: "1rem 1rem 1.5rem 1rem",
        }}
      >
        <Typography variant="h5">{user.name}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            textAlign: "center",
            pt: "0.5rem",
          }}
        >
          {userData.map((item, id, array) => (
            <React.Fragment key={id}>
              <span>
                <Typography variant="caption">{item.value}</Typography> <br />
                <Typography variant="body2">{item.title}</Typography>
              </span>
              {id !== array.length - 1 && (
                <Divider orientation="vertical" variant="middle" flexItem />
              )}
            </React.Fragment>
          ))}
        </Box>
      </FlexCenter>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: "1rem",
          color: main,
          position: "relative",
        }}
      >
        {edit ? (
          <>
            <Box
              component="form"
              onClick={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              {data.map(
                (item, id) =>
                  item.name && (
                    <Box
                      key={id}
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      {item.icon}
                      <TextField
                        sx={{
                          width: "100%",
                          ".css-ume8vi-MuiInputBase-input-MuiInput-input": {
                            padding: "0",
                            height: "1em",
                          },
                          ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                            padding: "0",
                            height: "1em",
                          },
                          ".css-uh6r06-MuiInputBase-root-MuiInput-root:after": {
                            borderBottom: `1px solid ${purple}`,
                          },
                        }}
                        id="standard-basic"
                        variant="standard"
                        placeholder={item.name}
                      />
                    </Box>
                  )
              )}
              <Box
                component="button"
                sx={{
                  height: "2.1rem",
                  width: "2.1rem",
                  backgroundColor: light,
                  position: "absolute",
                  top: "-1rem",
                  right: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: `2px solid ${darkbg}`,
                }}
                type="submit"
                onClick={() => setEdit(false)}
              >
                <IconButton>
                  <GiCheckMark size={"1rem"} style={{ color: "green" }} />
                </IconButton>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                height: "2.1rem",
                width: "2.1rem",
                backgroundColor: light,
                position: "absolute",
                top: "-1rem",
                right: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: `2px solid ${darkbg}`,
              }}
            >
              <IconButton onClick={() => setEdit(true)}>
                <MdEdit size={"1rem"} style={{ color: darkbg }} />
              </IconButton>
            </Box>
            {data.map(
              (item, id) =>
                item.name && (
                  <Box
                    key={id}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    {item.icon}
                    <Typography style={{ lineHeight: 1 }}>
                      {item.name}
                    </Typography>
                  </Box>
                )
            )}
          </>
        )}
      </Box>
    </Card>
  );
};

export default ProfileCard;
