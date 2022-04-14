import { 
    Container, 
    Text, 
    Image, 
    Box, 
    Flex, 
    Button, 
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview, 
    useEditableControls, 
    ButtonGroup,
    IconButton,
    EditIcon,
    Input  
} from "@chakra-ui/react";
import styles from './profile.module.css';

function Profile(){
    
    return(
        <div>
            <Flex align="center" w="100%" justify="center" flexDirection="column">
                <Image 
                    boxSize='200px'
                    borderRadius='100px'
                    display='flex'
                    justifyContent='center'
                    src="https://preview.redd.it/7ayjc8s4j2n61.png?auto=webp&s=609a58fa21d46424879ee44156e44e0404940583" alt='default pic'
                />
                <Button margin="20px">Change Profile Pic</Button>
                <Editable defaultValue='Take some chakra' margin="20px" isPreviewFocusable={false}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <Button margin="20px">Edit Profile</Button>
            </Flex>
            <Flex>

            </Flex>
        </div>
    )}

    
export default Profile;