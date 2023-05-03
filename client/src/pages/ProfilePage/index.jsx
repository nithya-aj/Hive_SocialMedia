import { Box, Button, Card, Typography } from '@mui/joy'
import React from 'react'

const ProfilePage = () => {
    return (
        <Box>
            <Card>
                <Box sx={{ display: 'flex' }}>
                    <div>
                        <Typography level="body3">Total price:</Typography>
                        <Typography fontSize="lg" fontWeight="lg">
                            $2,900
                        </Typography>
                    </div>
                    <Button
                        variant="solid"
                        size="sm"
                        color="primary"
                        aria-label="Explore Bahamas Islands"
                        sx={{ ml: 'auto', fontWeight: 600 }}
                    >
                        Explore
                    </Button>
                </Box>
            </Card>
        </Box>
    )
}

export default ProfilePage