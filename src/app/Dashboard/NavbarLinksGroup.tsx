// NavbarLinksGroup.tsx
'use client';
import React, { useState } from 'react';
import { Group, Collapse, UnstyledButton, Text } from '@mantine/core';


interface Link {
  label: string;
  link: string;
}

interface LinksGroupProps {
  label: string;
//   icon: IconType;
  links?: Link[];
  initiallyOpened?: boolean;
}

export function LinksGroup({ label,  links, initiallyOpened }: LinksGroupProps) {
  const [opened, setOpened] = useState(initiallyOpened || false);

  const toggleOpened = () => setOpened((prev) => !prev);

  const linksList = links?.map((link) => (
    <Text key={link.label} component="a" href={link.link} style={{ display: 'block', padding: '4px 16px' }}>
      {link.label}
    </Text>
  ));

  return (
    <div>
      <UnstyledButton onClick={toggleOpened} style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
  
        <Text size="sm" ml="md">{label}</Text>
      </UnstyledButton>
      <Collapse in={opened}>
        {linksList}
      </Collapse>
    </div>
  );
}

export default LinksGroup;