import React from "react";
import { SidebarContentFromCategory, SidebarContent } from "@/utils/sidebarContent";
import { Accordion, Avatar, Divider, Group, NavLink, ScrollArea } from "@mantine/core";
import Link from "next/link";
import TextComponent from "./text";
import { Divide, Eye } from "react-feather";

const SidebarContext = () => {
    interface AccordionLabelProps {
        label: string;
        image: string;
    }

    function AccordionLabel({ label, image }: AccordionLabelProps) {
        return (
            <Group noWrap>
                <Avatar src={image} radius="xs" size="md" />
                <div>
                    <TextComponent title={label}></TextComponent>
                </div>
            </Group>
        );
    }
    return (
        <>
            {SidebarContent.map((item) => {
                return (
                    <Link href={item.href} key={item.id}>
                        <NavLink label={<AccordionLabel {...item} />}></NavLink>
                        <Divider></Divider>
                    </Link>
                );
            })}
            {SidebarContentFromCategory.map((item) => {
                return (
                    <Accordion defaultValue="customization" key={item.id}>
                        <Accordion.Item value="focus-ring">
                            <Accordion.Control>
                                <AccordionLabel {...item} />
                            </Accordion.Control>
                            <Accordion.Panel>
                                {item.children.map((itemChild) => {
                                    return (
                                        <Link href={itemChild.href} key={itemChild.id}>
                                            <NavLink
                                                label={
                                                    <TextComponent
                                                        title={itemChild.title}
                                                    ></TextComponent>
                                                }
                                                icon={<Eye size={16}></Eye>}
                                            />
                                        </Link>
                                    );
                                })}
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                );
            })}
        </>
    );
};

export default SidebarContext;
